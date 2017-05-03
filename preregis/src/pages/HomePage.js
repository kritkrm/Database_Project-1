import React, { Component } from 'react';
import Table from '../container/table';
import SearchPanel from '../container/search_panel';
import NavBar from '../container/nav_bar';
import Footer from '../container/footer';


class HomePage extends Component {
  render() {
    return (
      <div classNameName="App">
        <NavBar />

        <div className="row content">
            <div className="text-center">
                <Table />
                <SearchPanel />
            </div>
        </div>

        <Footer />
      </div>

    );
  }
}

export default HomePage;
