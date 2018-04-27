import React, { Component } from 'react';
import '../style/loginStyle.css';
import axios from 'axios';

import {Tabs, Tab} from 'material-ui/Tabs';

class LoginPage extends Component {

    backend = 'http://127.0.0.1:3000' ; 

    state = {
        username: "",
        password: "",
        type: ""
    };

    handleUserNameChange = (event) => {
        this.setState({ username: event.target.value });
    }
    handlePasswordNameChange = (event) => {
        this.setState({ password: event.target.value });
    }


    handleSubmit = (event) => {
        console.log( this.state.username ) ;
        if( this.state.type == "instructor" ) {
            // console.log("INSTRUCTOR LOGIN SUBMIT");
            console.log(this.state.type);
            axios.post('http://127.0.0.1:3000' + '/auth/instructor', {
                instructor_id : this.state.username,
                password : this.state.password
            },{
                withCredentials: true,
            }).then(function (response) {
                if( Object.keys(response.data).length === 0 ){
                    console.log('LOGIN as INSTRUCTOR FAIL ');
                } else { 
                    console.log( response.data );
                    console.log('LOGIN as INSTRUCTOR OK ');
                    this.props.changePage('teacherDashboard')
                    this.props.changeID(response.data.user.instructor_id);
                    this.props.changeType("instructor")
                }
            }.bind(this)).catch(function (err) {
                 console.error(err);
            });

        } else {
           // console.log("STUDENT LOGIN SUBMIT");
            console.log(this.state.type);
            axios.post('http://127.0.0.1:3000/auth/student', {
                student_id : this.state.username,
                password : this.state.password
            }).then(function (response) {
                if( Object.keys(response.data).length === 0 ){
                    console.log('LOGIN as STUDENT FAIL ');
                } else { 
                    console.log( response.data );
                    console.log('LOGIN as STUDENT OK ');
                    this.props.changePage('studentDashboard')
                    this.props.changeID(response.data.user.student_id);
                    this.props.changeType("student")
                    
                }
            }.bind(this)).catch(function (err) {
                 console.error(err);
            });
        }

    }       

    handleTabChange = (value) => {
        this.setState({ type: value});
        console.log(this.state.type) ;
    };

    render() {
        // console.log(this.props)
        return (
            <div className="signin-container" style={{overflow: 'hidden', marginTop: '64px', height: '100%', paddingBottom: '128px'}}>
                <Tabs style={{ width: '400px', margin: 'auto', borderTopRightRadius: '5px', borderTopLeftRadius: '5px', boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)', backgroundColor: '#555555' }} value={this.state.value}  onChange={this.handleTabChange}>
                    <Tab label="Student" style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px', backgroundColor: '#555555' }} value = "student">
                        <div className="signup">
                            <h1>Login for student</h1>
                            <div className="row">
                                <input type="text" name="username" placeholder="Student ID" onChange = {this.handleUserNameChange} value = {this.state.username}/>
                            </div>
                            <div className="row">
                                <input type="password" name="password" placeholder="Password" value = {this.state.password} onChange = {this.handlePasswordNameChange}/>
                            </div>
                            <button onClick={this.handleSubmit}>
                                Log in
                            </button>
                        </div>
                    </Tab>
                    <Tab label="Instructor" style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px',  backgroundColor: '#555555' }} value = "instructor">
                        <div className="signup">
                            <h1>Login for instructor</h1>
                            <div className="row">
                                <input type="text" name="username" placeholder="Instructor ID" onChange = {this.handleUserNameChange} value = {this.state.username} />
                            </div>
                            <div className="row">
                                <input type="password" name="password" placeholder="Password" value = {this.state.password} onChange = {this.handlePasswordNameChange}/>
                            </div>
                            <button onClick={this.handleSubmit}>
                                Log in
                            </button>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default LoginPage;
