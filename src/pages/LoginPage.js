import React, { Component } from 'react';
import '../style/loginStyle.css';

class LoginPage extends Component {
    render() {
        return (
            <body>
                <div className="signup">
                    <h1>Login</h1>
                    <form method="post" action="#">
                        <div className="row">
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="row">
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <input type="submit" name="signup" value="Submit" />
                    </form>
                </div>
            </body>
        );
    }
}

export default LoginPage;
