import React, { Component } from 'react';

class SearchPanel extends Component {
  render() {
    return (
        <div className="col-xs-4 text-center my-panel">
            <div className="panel panel-default">

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
                            88888888 : Fmmmm   <span className="badge">12</span>
                        </div>
                        <div className="searched-credit">
                            (2 credit)
                        </div>
                    
                    
                        <ul className="list-group">
                            <a href="#" className="list-group-item">
                                <div className="secname">Sec. 1  <div className="teachername">By : aj.Fmmmmmm <br/>Time : 9.00-11.00<br/>Room : 1412</div></div>
                                <br/>
                                <br/>
                                <br/>
                            </a>
                            <a href="#" className="list-group-item">
                                <div className="secname">Sec. 2</div>
                                <div className="long2">Time : 9.00-11.00</div>
                                <br/>
                                <div className="long1">By : aj.Fmmmmmcfffm </div>
                                <div className="teachername">Room : 1412</div>
                                <br/>
                            </a>
                            <a href="#" className="list-group-item">
                                <div className="secname">Sec. 2</div>
                                <div className="long2">Time : 9.00-11.00</div>
                                <br/>
                                <div className="long1">By : aj.Fmmmmmcfffm </div>
                                <div className="teachername">Room : 1412</div>
                                <br/>
                            </a>
                            <a href="#" className="list-group-item">
                                <div className="secname">Sec. 2</div>
                                <div className="long2">Time : 9.00-11.00</div>
                                <br/>
                                <div className="long1">By : aj.Fmmmmmcfffm </div>
                                <div className="teachername">Room : 1412</div>
                                <br/>
                            </a>
                            <a href="#" className="list-group-item">Warnings</a>
                            <a href="#" className="list-group-item">Deleted</a>
                            <a href="#" className="list-group-item">Warnings</a>
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
