import React, { Component } from 'react';

class SearchPanel extends Component {
  render() {
    return (
        <div className="col-sm-4 text-center">
            <div className="jumbotron">
                <h3>List of course</h3>
                <hr/>
                <div className="container-fluid">
                    <div className="col-sm-3" />
                    <input type="text" class="form-control" className="col-sm-6 search searchTime" placeholder="Time : 9.00" aria-describedby="basic-addon1" />
                    <div className="col-sm-10" />
                    <input type="text" class="form-control" className="col-sm-10 search searchNo" placeholder="Course NO. : 88888888" aria-describedby="basic-addon1" />
                    <input type="text" class="form-control" className="col-sm-12 search searchName" placeholder="Course Name : Gen Phy II" aria-describedby="basic-addon1" />
                    <br/>
                </div>
                <button className="searchbotton">search</button>
                <hr/>
            </div>
        </div>
    );
  }
}

export default SearchPanel;
