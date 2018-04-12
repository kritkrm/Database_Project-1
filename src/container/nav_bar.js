import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-inverse" role="navigation">
                <div href="#" className="navbar-left" style={{fontSize: '20px', color: 'gray', paddingLeft: '10px', paddingTop: '8px'}}>
                    PREREGIS
                </div>
                <div href="#" className="navbar-left" style={{fontSize: '12px', color: 'gray', paddingLeft: '10px', paddingTop: '14px'}}>
                    (in process)
                </div>
                <div>
                    <a href="#" className="navbar-right" style={{color: 'gray', paddingRight: '30px', paddingTop: '10px'}}>Chulalongkorn University</a>
                </div>
            </nav>
        </div>
    );
  }
}

export default NavBar;
