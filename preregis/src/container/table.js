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
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0}, 
                        {name: "", period: 0}
                    ],
                    [
                        {name: "", period: 0}, {name: "FMM", period: 2}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0}
                    ],
                    [
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0}, 
                        {name: "", period: 0}
                    ],
                    [
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0},
                        {name: "KUY", period: 3}, {name: "", period: 0}, {name: "fm", period: 1},
                        {name: "", period: 0}, {name: "", period: 0}
                    ],
                    [
                        {name: "thipok", period: 4}, {name: "Tham", period: 2},
                        {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0}, {name: "", period: 0}
                        
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
            <div className="col-xs-1 no-padding"><p className="my-color  blackline">{timePeriod}</p></div>
        );
    }

    render() {
        let time_periods = ['8', '9', '10', '11', '12', '13', '14', '15', '16' ,'17'];
        return (

              <div className="outterjumbotron">
                <div className="all-icon">
                  <a href="#"><i className="my-icon glyphicon glyphicon-list"></i></a>
                  
                      
                      <button type="button" className="my-icon glyphicon glyphicon-picture" data-toggle="modal" data-target="#myModal"></button>
                      
                      <div id="myModal" className="modal fade" role="dialog">
                        <div className="modal-dialog modal-lg">
                          <div className="modal-content">
                            
                            <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal">&times;</button>
                              <h4 className="modal-title text-center">CU Pre regis</h4>
                            </div>
                            
                            <div className="modal-body">
                              <p>Some text in the modal.</p>
                            </div>
      
                            <div className="modal-footer">
                              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>

                          </div>
                        </div>
                      </div>








                </div>
                <div className="jumbotron ">
                  <div className="col-sm-8 text-left my-table" >
                
                      <div className="row" >
                          <div className="col-xs-2 blackline blankbox"></div>
                          {time_periods.map(this.renderTimePeriods)}
                      </div>
                      
                      <div className="row">
                          <div className="col-xs-2 text-center"><p>Monday</p></div>
                          {this.state.subjects[0].map(this.renderSubjects)}

                      </div>
                      <div className="row">
                          <div className="col-xs-2 text-center"><p>Tuesday</p></div>
                          {this.state.subjects[1].map(this.renderSubjects)}
                      </div>

                      <div className="row">
                          <div className="col-xs-2 text-center"><p>Wednesday</p></div>
                          {this.state.subjects[2].map(this.renderSubjects)}
                      </div>

                      <div className="row">
                          <div className="col-xs-2 text-center"><p>Thursday</p></div>
                          {this.state.subjects[3].map(this.renderSubjects)}
                      </div>

                      <div className="row">
                          <div className="col-xs-2 text-center"><p>Friday</p></div>
                          {this.state.subjects[4].map(this.renderSubjects)}
                      </div>
                  </div>          
                </div>


              </div>
    );
  }
}

export default Table;
