import React, { Component } from 'react';
import '../style/loginStyle.css';

import {Tabs, Tab} from 'material-ui/Tabs';

class LoginPage extends Component {
    render() {
        return (
            <div className="signin-container" style={{overflow: 'hidden'}}>
                <Tabs style={{ width: '400px', margin: 'auto', borderTopRightRadius: '5px', borderTopLeftRadius: '5px' }}>
                    <Tab label="Student" style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px' }}>
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
                    <Tab label="Instructor" style={{ borderTopRightRadius: '5px', borderTopLeftRadius: '5px' }}>
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
