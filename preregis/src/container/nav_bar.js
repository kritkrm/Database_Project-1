import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                        </ul>
                        <ul className="nav navbar-nav navbar-left">
                            <li><p>Chulalongkorn University</p></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">FM & FOCUS KUY ▼</a></li>
                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    );
  }
}

export default NavBar;
