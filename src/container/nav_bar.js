import React, { Component } from 'react';

class NavBar extends Component {
    state = {
        onLogOut: false,
    };
  render() {
    return (
        <nav className="navbar navbar-inverse" role="navigation" style={{ padding: '0px', height: '50px' }}>
            <div href="#" className="navbar-left" style={{fontSize: '20px', color: 'gray', paddingLeft: '10px', paddingTop: '12px'}}>
                PREREGIS
            </div>
            <div href="#" className="navbar-left" style={{fontSize: '12px', color: 'gray', paddingLeft: '10px', paddingTop: '18px'}}>
                (in process)
            </div>
            <div 
                className="navbar-right" 
                style={{ 
                    cursor: 'pointer', 
                    color: 'gray', 
                    marginRight: '0px',
                    paddingRight: '24px', 
                    paddingTop: '16px',
                    paddingLeft: '24px',
                    height: '100%',
                    backgroundColor: this.state.onLogOut ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
                }}
                onClick={() => this.props.logOut()}
                onMouseOver={() => this.setState({ onLogOut: true })}
                onMouseOut={() => this.setState({ onLogOut: false })}
            >
                Log out
            </div>
        </nav>
    );
  }
}

export default NavBar;
