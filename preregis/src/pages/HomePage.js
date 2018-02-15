import React, { Component } from 'react';

import Footer from '../container/footer';
import Header from '../container/header';
import NavBar from '../container/nav_bar';
import SearchPanel from '../container/search_panel';
import Table from '../container/table';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      classOnTable: [],
      subject: [
        { 
          courseNo: '0295101', 
          name: 'intro to data sci', 
          time: [
            { start: 1300, end: 1600, day: 5 }, 
          ],
          index: 0,
          onList: false,
        },
        { 
          courseNo: '2301108', 
          name: 'calculus ii', 
          time: [
            { start: 800, end: 950, day: 1 }, 
            { start: 950, end: 1100, day: 3 }
          ],
          index: 1,
          onList: false,
        }, { 
          courseNo: '2304104',
          name: 'gen phy ii ',
          time: [
            { start: 950, end: 1100, day: 1 },
            { start: 800, end: 950, day: 5 },
          ], 
          index: 2,
          onList: false,
        }, { 
          courseNo: '2304184', 
          name: 'gen phy lab ii',
          time: [
            { start: 1300, end: 1600, day: 1 },
          ],  
          index: 3,
          onList: false,
        }, { 
          courseNo: '2109101', 
          name: 'eng materials',
          time: [
            { start: 1100, end: 1250, day: 2 },
            { start: 800, end: 950, day: 3 },
          ],  
          index: 4,
          onList: false,
        }, { 
          courseNo: '2110101', 
          name: 'comp prog', time: [
            { start: 800, end: 1100, day: 2 },
          ],  
          index: 5,
          onList: false,
        }, { 
          courseNo: '5500112', 
          name: 'exp eng ii', 
          time: [
            { start: 950, end: 1100, day: 3 },
          ], 
          index: 6,
          onList: false,
        }, { 
          courseNo: '2100111', 
          name: 'expl eng world', 
          time: [
            { start: 950, end: 1250, day: 5 },
          ], 
          index: 7,
          onList: false,
        }, { 
          courseNo: '2110594', 
          name: 'adv top comp iv', 
          time: [
            { start: 900, end: 1200, day: 1 },
          ], 
          index: 8,
          onList: false,
        }, { 
          courseNo: '2110471', 
          name: 'comp network i', time: [
            { start: 1300, end: 1500, day: 2 },
            { start: 950, end: 1150, day: 3 },
          ], 
          index: 9,
          onList: false,
        }, { 
          courseNo: '2110332', 
          name: 'sys analysis dsgn',
          time: [
            { start: 950, end: 1100, day: 2 },
            { start: 950, end: 1100, day: 4 },
          ], 
          index: 10,
          onList: false,
        }, { 
          courseNo: '2110422', 
          name: 'db mgt sys design', 
          time: [
            { start: 800, end: 950, day: 2 },
            { start: 800, end: 950, day: 4 },
          ], 
          index: 11,
          onList: false,
        }, { 
          courseNo: '2110318', 
          name: 'dis sys essen', 
          time: [
            { start: 800, end: 900, day: 3 },
          ],  
          index: 12,
          onList: false,
        }, { 
          courseNo: '5500308', 
          name: 'tech writ eng', 
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
    let copySubject = this.state.subject;
    copySubject[index].onList = true;
    this.setState({
        subject: copySubject,
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
    console.log(copyClass);
    let res = [[], [], [], [], []];
    for(var day = 1; day < 6; day++) {
      for(var time = 800; time < 1700; time+=50) {
        var idx = (time - 800) / 50;
        var obj = copyClass[day][idx];
        if(obj == null) {
          console.log(day, time);
        }
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
    console.log(this.state.classOnTable);
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="main-content">
          <div className="row content">

              <div>
                  
                  <div className="flex-center">
                    <Table subject={this.state.subject} falseOnlist={this.falseOnlist} classOnTable={this.state.classOnTable}/>      
                    <SearchPanel subject={this.state.subject} trueOnlist={this.trueOnlist} falseOnlist={this.falseOnlist} />
                  </div>
              </div>

          </div>
        </div>
      </div>

    );
  }
}

export default HomePage;
