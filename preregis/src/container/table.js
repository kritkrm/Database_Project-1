import React, { Component } from 'react';
import SubjectBar from '../components/subject_bar';

class Table extends Component {
  render() {
    return (
        <div className="col-sm-8 text-left">
            <div className="jumbotron">
                  <h1>CU Pre-regis</h1>
                  <div className="row" >
                      <div className="col-sm-2"></div>
                      <div className="col-sm-1"><p>8</p></div>
                      <div className="col-sm-1"><p>9</p></div>
                      <div className="col-sm-1"><p>10</p></div>
                      <div className="col-sm-1"><p>11</p></div>
                      <div className="col-sm-1"><p>12</p></div>
                      <div className="col-sm-1"><p>13</p></div>
                      <div className="col-sm-1"><p>14</p></div>
                      <div className="col-sm-1"><p>15</p></div>
                      <div className="col-sm-1"><p>16</p></div>
                      <div className="col-sm-1"><p></p></div>
                  </div>
                  <hr/>
                  <div className="row">
                      <div className="col-sm-2 text-center"><p>Monday</p></div>
                      <div className="col-sm-2"><p id="rcorners1">Calculus I</p></div>

                      <div className="col-sm-2"><p id="rcorners1">Gen Phy I</p></div>

                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                  </div>
                  <div className="row">
                      <div className="col-sm-2 text-center"><p>Tuesday</p></div>
                      <SubjectBar period={2} name="Calculus" />
                      <SubjectBar period={2} name="Focus" />
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                  </div>

                  <div className="row">
                      <div className="col-sm-2 text-center"><p>Wednesday</p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                  </div>

                  <div className="row">
                      <div className="col-sm-2 text-center"><p>Thursday</p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <SubjectBar period={3} name="FM" />
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                  </div>

                  <div className="row">
                      <div className="col-sm-2 text-center"><p>Friday</p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                      <div className="col-sm-1"><p> </p></div>
                  </div>
            </div>
        </div>
    );
  }
}

export default Table;
