import React, { Component } from 'react';
import Table from '../container/table';
import SearchPanel from '../container/search_panel';
import NavBar from '../container/nav_bar';
import Footer from '../container/footer';
import Header from '../container/header';


class HomePage extends Component {
  render() {
    return (
      <div classNameName="App">
        <NavBar />
        <div className="main-content">
        <div className="row content">
            <div className="text-center">
                <Header />
                <div className="flex-center">
                  <Table />
                  <SearchPanel />
                </div>
            </div>
        </div>
        </div>
        <Footer />
      </div>

    );
  }
}

export default HomePage;
