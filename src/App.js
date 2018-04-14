import React, { Component } from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardStudent from './pages/DashboardStudent';
import DashboardTeacher from './pages/DashboardTeacher';
import NavBar from './container/nav_bar';

class App extends Component {
  
  state = {
    page: 'login',
    // page: 'studentDashboard',
    // page: 'teacherDashboard',
  };

  changePage = (pageName) => {
    this.setState({ page: pageName });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div style={{ overflowX: 'hidden' }}>
        <NavBar />
        {this.state.page === 'login' && <LoginPage changePage={this.changePage} />}
        {this.state.page === 'home' && <HomePage />}
        {this.state.page === 'studentDashboard' && <DashboardStudent />}
        {this.state.page === 'teacherDashboard' && <DashboardTeacher />}
      </div>
    );
  }
}

export default App;
