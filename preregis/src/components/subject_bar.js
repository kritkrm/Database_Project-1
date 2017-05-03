import React, { Component } from 'react';

class SubjectBar extends Component {
    render() {
        if(this.props.period == 1) {
            return (
                 <div className="col-sm-1"><p id="rcorners1">{this.props.name}</p></div>
            );
        }
        else {
            return (
                 <div className="col-sm-2"><p id="rcorners1">{this.props.name}</p></div>
            );
        }
    }
}

export default SubjectBar;
