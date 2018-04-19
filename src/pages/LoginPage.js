import React, { Component } from 'react';
import '../style/loginStyle.css';

import {Tabs, Tab} from 'material-ui/Tabs';

class LoginPage extends Component {
    render() {
        return (
            <div className="signin-container" style={{overflow: 'hidden', marginTop: '64px', height: '100%', paddingBottom: '128px'}}>
                <Tabs style={{ width: '400px', margin: 'auto', borderTopRightRadius: '5px', borderTopLeftRadius: '5px', boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)', backgroundColor: '#555555' }}>
                    <Tab label="Student" style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px', backgroundColor: '#555555' }}>
                        <div className="signup">
                            <h1>Login for student</h1>
                            <div className="row">
                                <input type="text" name="username" placeholder="Student ID" />
                            </div>
                            <div className="row">
                                <input type="password" name="password" placeholder="Password" />
                            </div>
                            <button onClick={() => this.props.changePage('studentDashboard')}>
                                Log in
                            </button>
                        </div>
                    </Tab>
                    <Tab label="Instructor" style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px',  backgroundColor: '#555555' }}>
                        <div className="signup">
                            <h1>Login for instructor</h1>
                            <div className="row">
                                <input type="text" name="username" placeholder="Instructor ID" />
                            </div>
                            <div className="row">
                                <input type="password" name="password" placeholder="Password" />
                            </div>
                            <button onClick={() => this.props.changePage('teacherDashboard')}>
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
