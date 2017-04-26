import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

    </div>

    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
      </ul>

      <ul className="nav navbar-nav navbar-left">
        <li><p>Chulalongkorn University</p></li>
      </ul>

      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">FM & FOCUS KUY ▼</a></li> 
      </ul>

    </div>

  </div>
        </nav>

<div className="row content">
  <div className="text-center">

    <div className="col-sm-8 text-left">
        <div className="jumbotron text-center">
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
                  <div className="col-sm-2"><p>Monday</p></div>
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
                  <div className="col-sm-2"><p>Tuesday</p></div>

                  <div className="col-sm-2"><p id="rcorners1">Comp Prog</p></div>
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
                  <div className="col-sm-2"><p>Wednesday</p></div>
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
                  <div className="col-sm-2"><p>Thursday</p></div>
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
                  <div className="col-sm-2"><p>Friday</p></div>
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

    <div className="col-sm-4 text-center">
       <div className="jumbotron">
       
       <h3>List of course</h3>
       <hr/>

        <div className="container-fluid">

            <div className="search searchTime" >
              Time : 9.00
            </div>

            <div className="search searchNo">
              Course NO. : 88888888
            </div>
      
            <div className="search searchName">
              Course Name : Gen Phy II
            </div>
        
            <button className="searchbotton">
              search
            </button>

            
        </div>
      <hr/>
      
       </div>
    </div>



    </div>
    </div>




<footer className="container-fluid text-center">
  <p>Footer Text</p>
</footer>
      </div>

    );
  }
}

export default App;
