import React, { Component } from 'react';

class SearchPanel extends Component {
  render() {
    return (
        <div className="col-sm-4 text-center">
            <div className="jumbotron">
                    <h3>List of course</h3>
                    <hr/>

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

                <div className="col-sm-12 searched-course-name">
                    88888888 : Fmmmm
                    <div className="searched-credit">(2 credit)</div>
                </div>
                

                <botton className="courselist col-sm-12">
                    SEC 1   By aj.Fmmmm
                    <br/>
                    Time : 9.00-11.00  Room : 1412
                </botton>

                <botton className="courselist2 col-sm-6">
                    By aj.Fmmmm
                    <br/>
                    Time : 9.00-11.00
                </botton>

                <botton className="courselist col-sm-6">
                    By aj.Fmmmm
                    <br/>
                    Time : 9.00-11.00
                </botton>

                <botton className="courselist col-sm-6">
                    By aj.Fmmmm
                    <br/>
                    Time : 9.00-11.00
                </botton>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    );
  }
}

export default SearchPanel;

