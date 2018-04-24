import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
// {course_id: "2111211", year: "2015", semester: "1", section_id: "1", student_id: "5831057021", grade: "4.00"}
const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
    button: {
        margin: 12,
        marginBottom: 32,
    },
  };

class ShowList extends Component {

    state = {
        dataCourseID: ['2110101', '2110222'],
        dataYear: ['2016', '2017', '2018'],
        dataSemester: ['1', '2'],
        dataSectionID: ['1', '2', '3', '33'],
        dataStudentID: ['5830622421', '58311111'],
        dataGrade: [],
        courseId: '',
        year: '',
        semester: '',
        grade: '',
        section: '',
        studentId: '',
      };
    
      handleUpdateInput = (value) => {
          this.setState(value);
      };
    
      render() {
        return (
          <div style={{ padding: '32px', fontSize: '16px' }}>
            <div className="row">
                Course ID: 
                <AutoComplete
                hintText="ex. 2110101"
                dataSource={this.state.dataCourseID}
                onUpdateInput={(value) => this.handleUpdateInput({ ...this.state, courseId: value })}
                value={this.state.courseId}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row">
                Year: 
                <AutoComplete
                hintText="ex. 2016"
                dataSource={this.state.dataYear}
                onUpdateInput={(value) => this.handleUpdateInput({ ...this.state, year: value })}
                value={this.state.year}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row">
                Semester: 
                <AutoComplete
                hintText="ex. 1"
                dataSource={this.state.dataSemester}
                onUpdateInput={(value) => this.handleUpdateInput({ ...this.state, semester: value })}
                value={this.state.semester}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row">
                Section: 
                <AutoComplete
                hintText="ex. 33"
                dataSource={this.state.dataSectionID}
                onUpdateInput={(value) => this.handleUpdateInput({ ...this.state, section: value })}
                value={this.state.section}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row">
                Student ID: 
                <AutoComplete
                hintText="ex. 5830622421"
                dataSource={this.state.dataStudentID}
                onUpdateInput={(value) => this.handleUpdateInput({ ...this.state, studentId: value })}
                value={this.state.studentId}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row">
                Grade: 
                <AutoComplete
                hintText="ex. A"
                dataSource={this.state.dataGrade}
                onUpdateInput={(value) => this.handleUpdateInput({ ...this.state, grade: value })}
                value={this.state.grade}
                style={{ marginLeft: '16px' }}
                />
            </div>
            <div className="row" style={{ marginLeft: '64px' }}>
                <RaisedButton label="Submit" primary={true} style={styles.button} onClick={() => console.log(this.state)} />
            </div>
          </div>
        );
      }
}

export default ShowList;