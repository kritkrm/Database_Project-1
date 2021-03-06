import React, { Component } from 'react';

import Footer from '../container/footer';
import Header from '../container/header';
import SearchPanel from '../container/search_panel';
import Table from '../container/table';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
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
        },
        { 
          courseNo: '2301108', 
          name: 'Calculus II', 
          time: [
            { start: 800, end: 950, day: 1 }, 
            { start: 950, end: 1100, day: 3 }
          ],
          index: 1,
          onList: false,
        }, { 
          courseNo: '2304104',
          name: 'Gen Phy II ',
          time: [
            { start: 950, end: 1100, day: 1 },
            { start: 800, end: 950, day: 5 },
          ], 
          index: 2,
          onList: false,
        }, { 
          courseNo: '2304184', 
          name: 'Gen Phy Lab II',
          time: [
            { start: 1300, end: 1600, day: 1 },
          ],  
          index: 3,
          onList: false,
        }, { 
          courseNo: '2109101', 
          name: 'Eng Materials',
          time: [
            { start: 1100, end: 1250, day: 2 },
            { start: 800, end: 950, day: 3 },
          ],  
          index: 4,
          onList: false,
        }, { 
          courseNo: '2110101', 
          name: 'Comp Prog', 
          time: [
            { start: 800, end: 1100, day: 2 },
          ],  
          index: 5,
          onList: false,
        }, { 
          courseNo: '5500112', 
          name: 'Exp Eng II', 
          time: [
            { start: 950, end: 1100, day: 3 },
          ], 
          index: 6,
          onList: false,
        }, { 
          courseNo: '2100111', 
          name: 'Expl Eng World', 
          time: [
            { start: 950, end: 1250, day: 5 },
          ], 
          index: 7,
          onList: false,
        }, { 
          courseNo: '2110594', 
          name: 'Adv Top Comp IV', 
          time: [
            { start: 900, end: 1200, day: 1 },
          ], 
          index: 8,
          onList: false,
        }, { 
          courseNo: '2110471', 
          name: 'Comp Network I', time: [
            { start: 1300, end: 1500, day: 2 },
            { start: 950, end: 1150, day: 3 },
          ], 
          index: 9,
          onList: false,
        }, { 
          courseNo: '2110332', 
          name: 'Sys Analysis Dsgn',
          time: [
            { start: 950, end: 1100, day: 2 },
            { start: 950, end: 1100, day: 4 },
          ], 
          index: 10,
          onList: false,
        }, { 
          courseNo: '2110422', 
          name: 'Db Mgt Sys Design', 
          time: [
            { start: 800, end: 950, day: 2 },
            { start: 800, end: 950, day: 4 },
          ], 
          index: 11,
          onList: false,
        }, { 
          courseNo: '2110318', 
          name: 'Dis Sys Essen', 
          time: [
            { start: 800, end: 900, day: 3 },
          ],  
          index: 12,
          onList: false,
        }, { 
          courseNo: '5500308', 
          name: 'Tech Writ Eng', 
          time: [
            { start: 900, end: 1200, day: 5 },
          ], 
          index: 13,
          onList: false,
        },
      ]
      
    };

    this.trueOnlist = this.trueOnlist.bind(this);
    this.falseOnlist = this.falseOnlist.bind(this);
    this.createClass = this.createClass.bind(this);
  }

  trueOnlist(index) {
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

  falseOnlist(index) {
    let copySubject = this.state.subject;
    copySubject[index].onList = false;
    this.setState({
        subject: copySubject,
    });
    this.createClass();
  }

  createClass() {
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

  render() {
    return (
      <div>
        <div className="main-content">
            <div className="flex-center">
              <Table subject={this.state.subject} falseOnlist={this.falseOnlist} classOnTable={this.state.classOnTable}/>      
              <SearchPanel subject={this.state.subject} trueOnlist={this.trueOnlist} falseOnlist={this.falseOnlist} />
            </div>
        </div>
      </div>

    );
  }
}

export default HomePage;
