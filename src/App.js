import React, { Component } from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NavBar from './container/nav_bar';

class App extends Component {
  
  state = {
    page: 'login',
  };

  componentDidMount() {

  }

  render() {
    return (
      <div style={{ overflowX: 'hidden' }}>
        <NavBar />
        {this.state.page === 'login' && <LoginPage />}
        {this.state.page === 'home' && <HomePage />}
      </div>
    );
  }
}

export default App;
