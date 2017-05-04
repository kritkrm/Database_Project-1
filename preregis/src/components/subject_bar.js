import React, { Component } from 'react';

class SubjectBar extends Component {
    render() {
            if(this.props.period == 0) {
                return (
                    <div className="col-sm-1"><p> </p></div>
                );
            }
            let per = "col-sm-" + this.props.period.toString();
            return (
                 <div className={per}><p id="rcorners1">{this.props.name}</p></div>
            );
    }
}

export default SubjectBar;
