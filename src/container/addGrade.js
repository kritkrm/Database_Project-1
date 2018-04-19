import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
// {course_id: "2111211", year: "2015", semester: "1", section_id: "1", student_id: "5831057021", grade: "4.00"}
class ShowList extends Component {

    state = {
        dataCourseID: ['2110101', '2110222'],
        dataYear: ['2016', '2017', '2018'],
        dataSemester: ['1', '2'],
        dataSectionID: ['1', '2', '3', '33'],
        dataStudentID: ['5830622421', '58311111'],
        dataGrade: [],
      };
    
      handleUpdateInput = (value) => {
      };
    
      render() {
        return (
          <div style={{ padding: '32px', fontSize: '16px' }}>
            <div className="row">
                Course ID: 
                <AutoComplete
                hintText="ex. 2110101"
                dataSource={this.state.dataCourseID}
                onUpdateInput={this.handleUpdateInput}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row">
                Year: 
                <AutoComplete
                hintText="ex. 2016"
                dataSource={this.state.dataYear}
                onUpdateInput={this.handleUpdateInput}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row">
                Semester: 
                <AutoComplete
                hintText="ex. 1"
                dataSource={this.state.dataSemester}
                onUpdateInput={this.handleUpdateInput}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row">
                Section: 
                <AutoComplete
                hintText="ex. 33"
                dataSource={this.state.dataSectionID}
                onUpdateInput={this.handleUpdateInput}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row">
                Student ID: 
                <AutoComplete
                hintText="ex. 5830622421"
                dataSource={this.state.dataStudentID}
                onUpdateInput={this.handleUpdateInput}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row">
                Grade: 
                <AutoComplete
                hintText="ex. A"
                dataSource={this.state.dataGrade}
                onUpdateInput={this.handleUpdateInput}
                style={{ marginLeft: '16px' }}
                />
            </div>
          </div>
        );
      }
}

export default ShowList;