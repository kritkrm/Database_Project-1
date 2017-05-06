import React, { Component } from 'react';

class SearchPanel extends Component {
  render() {
    return (
        <div className="col-xs-4 text-center my-panel">
            <div className="panel panel-default">

                <div className="panel-heading"> </div>

                <div className="panel-body">
                    <form>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-time"></i></span>
                            <input type="text" className="form-control" name="email" placeholder="Time : 9.00" />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-tag"></i></span>
                            <input type="text" className="form-control" name="email" placeholder="Course NO. : 88888888" />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-book"></i></span>
                            <input type="text" className="form-control" name="email" placeholder="Course Name : Gen Phy II" />
                        </div>


                    </form>
                    <button className="btn btn-primary" type="botton">search</button>
                    <hr/>

                    <div className="col-sm-12">
                        <div className="searched-course-name">
                        88888888 : Fmmmm <span className="badge">12</span>
                        <div className="searched-credit">(2 credit)</div>
                        </div>

                    <ul className="list-group">
                        <a href="#" className="list-group-item">
                            SEC 1   By aj.Fmmmm
                            <br/>
                            Time : 9.00-11.00  Room : 1412
                        </a>
                        <a href="#" className="list-group-item">Deleted</a>
                        <a href="#" className="list-group-item">Warnings</a>
                    </ul>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default SearchPanel;
