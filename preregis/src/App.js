import React, { Component } from 'react';

import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <div style={{ overflowX: 'hidden' }}>
        <HomePage />
      </div>
    );
  }
}

export default App;
