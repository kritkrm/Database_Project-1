import React, { Component } from 'react';

class SubjectBar extends Component {
    render() {
            let per = "col-sm-" + this.props.period.toString();
            return (
                 <div className={per}><p id="rcorners1">{this.props.name}</p></div>
            );
    }
}

export default SubjectBar;
