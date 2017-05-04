import React, { Component } from 'react';
import SubjectBar from '../components/subject_bar';

class Table extends Component {

    constructor(props) {
        super(props);

        this.state = {
                subjects: [
                    [
                        {name: "Focus", period: 2}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}
                    ],
                    [
                        {name: "", period: 0}, {name: "FMM", period: 2}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "", period: 0}
                    ],
                    [
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}
                    ],
                    [
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "KUY", period: 3}, {name: "", period: 0}, {name: "", period: 0}
                    ],
                    [
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}
                    ],
                ]
        };
    }

    renderSubjects(subject) {
        return (
            <SubjectBar period={subject.period} name={subject.name} />
        );
    }

    renderTimePeriods(timePeriod) {
        return (
            <div className="col-sm-1"><p>{timePeriod}</p></div>
        );
    }

    render() {
        let time_periods = ['8', '9', '10', '11', '12', '13', '14', '15', '16'];
        return (
            <div className="col-sm-8 text-left">
                <div className="jumbotron">
                      <div className="row" >
                          <div className="col-sm-2"></div>
                          {time_periods.map(this.renderTimePeriods)}
                      </div>
                      <hr/>
                      <div className="row">
                          <div className="col-sm-2 text-center"><p>Monday</p></div>
                          {this.state.subjects[0].map(this.renderSubjects)}
                      </div>
                      <div className="row">
                          <div className="col-sm-2 text-center"><p>Tuesday</p></div>
                          {this.state.subjects[1].map(this.renderSubjects)}
                      </div>

                      <div className="row">
                          <div className="col-sm-2 text-center"><p>Wednesday</p></div>
                          {this.state.subjects[2].map(this.renderSubjects)}
                      </div>

                      <div className="row">
                          <div className="col-sm-2 text-center"><p>Thursday</p></div>
                          {this.state.subjects[3].map(this.renderSubjects)}
                      </div>

                      <div className="row">
                          <div className="col-sm-2 text-center"><p>Friday</p></div>
                          {this.state.subjects[4].map(this.renderSubjects)}
                      </div>
                </div>
            </div>
    );
  }
}

export default Table;
