import React, { Component } from 'react';
import '../style/dashboard.css';

import {List, ListItem} from 'material-ui/List';
import ActionDescription from 'material-ui/svg-icons/action/description';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import ActionToc from 'material-ui/svg-icons/action/toc';
import SocialSchool from 'material-ui/svg-icons/social/school';
import SocialPerson from 'material-ui/svg-icons/social/person';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Grade from '../container/addGrade';
import HomePage from './HomePage';
import Request from '../container/request';
import Payment from '../container/payment';
import Students from '../container/students';
import SearchPanel from '../container/search_panel';
import Table from '../container/table';

class DashboardTeacher extends Component {
    
  state = {
    pages: [
        { name: 'Schedule', detail: 'View your course table' },
        { name: 'Grade', detail: 'Update your advisees\' grade' },
        { name: 'Students', detail: 'View your advisees\' detail' },
    ],
    selectedPage: { name: 'Schedule', detail: 'View your table' },
    classOnTable: [[], [], [], [], []],
    subject: [
      { 
        courseNo: '0295101', 
        name: 'Intro to Data Sci', 
        time: [
          { start: 1300, end: 1600, day: 5 }, 
        ],
        index: 0,
        onList: false,
      }
    ]
  };

  trueOnlist = (index) => {
    let copySubject = this.state.subject[index];
    let copyAllSubject = this.state.subject;
    let available = true;

    for(var i = 0; i < copySubject.time.length; i++){
      let day = copySubject.time[i].day-1;
      for(var j = 0; j < this.state.classOnTable[day].length; j++){
        let classNow = this.state.classOnTable[day][j];
        if( 
            classNow.courseNo != null && 
            ( classNow.start >= copySubject.time[i].start && classNow.start < copySubject.time[i].end) ||
            ( classNow.end > copySubject.time[i].start && classNow.end <= copySubject.time[i].end)
          ) {
            available = false;
        }
      }
    }

    copyAllSubject[index].onList = available;
    this.setState({
        subject: copyAllSubject,
    });
    this.createClass();
  }

  falseOnlist = (index) => {
    let copySubject = this.state.subject;
    copySubject[index].onList = false;
    this.setState({
        subject: copySubject,
    });
    this.createClass();
  }

  createClass = () => {
    let subj = this.state.subject;
    let copyClass = [[],[],[],[],[],[],[],[]];

    for(var day = 0; day < 8; day++){
      for(var time = 800; time < 1700; time+=50){
        var ansCount = 0;
        var selectedSubj;
        for(var i = 0; i < subj.length; i++) {
          var obj = subj[i].time;
          if(subj[i].onList){
            for(var j = 0; j < obj.length; j++) {
              if(time >= obj[j].start && obj[j].end > time && day==obj[j].day) {
                ansCount++;
                selectedSubj = {
                  courseNo: subj[i].courseNo,
                  name: subj[i].name,
                  index: subj[i].index,
                  start: obj[j].start,
                  end: obj[j].end,
                  period: (obj[j].end - obj[j].start)/50,
                };
              }
            }
          }
        }
        if(ansCount == 1) {
          copyClass[day].push(selectedSubj);
        } else if(ansCount == 0) {
          copyClass[day].push({ courseNo: '0' });
        }
      }
    }
    
    let res = [[], [], [], [], []];
    for(var day = 1; day < 6; day++) {
      for(var time = 800; time < 1700; time+=50) {
        var idx = (time - 800) / 50;
        var obj = copyClass[day][idx];
        if(obj.courseNo == '0') {
          res[day-1].push({ subject: null, period: 1 });  
        } else {
          res[day-1].push(obj);
          time += (obj.period*50) - 50;
        }
      }
    }
    
    this.setState({
        classOnTable: res,
    });
  }

  changePage = (nextPage) => {
    this.setState({
        selectedPage: this.state.pages[nextPage],
    })
  }


  render() {
    return (
      <div className="row" style={{ height: '80%', fontSize: '24px', marginTop: '50px' }}>
      <div className="col-md-3 sidenav" style={{ height: '94vh', paddingLeft: '32px' }}>
          <div style={{ width: '100%', textAlign: 'center', paddingTop: '48px', paddingBottom: '32px' }}>Student Menu</div>
          <List>
                <ListItem primaryText="Schedule" leftIcon={<ActionSchedule />} onClick={() => this.changePage(0)} />
                <ListItem primaryText="Grade" leftIcon={<SocialSchool />} onClick={() => this.changePage(1)} />
                <ListItem primaryText="Students" leftIcon={<SocialPerson />} onClick={() => this.changePage(2)} />
            </List>
      </div>
      <div className="col-md-9" style={{ paddingTop: '16px', paddingRight: '32px' }}>
          <Card>
              <CardTitle title={this.state.selectedPage.name} subtitle={this.state.selectedPage.detail} />
              {
                this.state.selectedPage.name === 'Payment' ? 
                <CardText style={{ width: '100%' }}>
                  <div className="row">
                    {this.state.selectedPage.name === 'Payment' && <Payment />}
                  </div>
                </CardText>
                :
                <CardText style={{ height: '78vh', width: '100%' }}>
                    {this.state.selectedPage.name === 'Schedule' && <Table subject={this.state.subject} falseOnlist={this.falseOnlist} classOnTable={this.state.classOnTable} />}
                    {this.state.selectedPage.name === 'Grade' && <Grade subject={this.state.subject} />}
                    {this.state.selectedPage.name === 'Students' && <Students />}
                </CardText>
              }
              
           </Card>
      </div>
    </div>
    );
  }
}

export default DashboardTeacher;
