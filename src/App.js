import React, { Component } from 'react';

import LoginPage from './pages/LoginPage';
import DashboardStudent from './pages/DashboardStudent';
import DashboardTeacher from './pages/DashboardTeacher';
import NavBar from './container/nav_bar';

class App extends Component {
  
  state = {
    page: 'login',
    // page: 'studentDashboard',
    // page: 'teacherDashboard',
    id: -1,
    type: ""
  };

  changeID = (nid) => {
    this.setState({id:nid}) 
  }

  changeType= (ntype) => {
    this.setState({type:ntype})
  }

  logOut = () => {
    this.setState({ page: 'login' });
  }
  changePage = (pageName) => {
    this.setState({ page: pageName });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div style={{ overflow: 'hidden', height: '80%' }}>
        <NavBar logOut={this.logOut} />
        {this.state.page === 'login' && <LoginPage changePage={this.changePage} changeID = {this.changeID} changeType = {this.changeType}/>}
        {this.state.page === 'studentDashboard' && <DashboardStudent id = {this.state.id}/>}
        {this.state.page === 'teacherDashboard' && <DashboardTeacher id = {this.state.id}/>}
      </div>
    );
  }
}

export default App;
