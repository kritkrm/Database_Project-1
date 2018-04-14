import React, { Component } from 'react';
import '../style/dashboard.css';

import {List, ListItem} from 'material-ui/List';
import ActionDescription from 'material-ui/svg-icons/action/description';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import ActionToc from 'material-ui/svg-icons/action/toc';
import SocialSchool from 'material-ui/svg-icons/social/school';
import ActionPayment from 'material-ui/svg-icons/action/payment';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class DashboardStudent extends Component {
  
  state = {
    pages: [
        { name: 'Schedule', detail: 'View your course table' },
        { name: 'Course', detail: 'Add / Remove / Withdraw your courses' },
        { name: 'Grade', detail: 'View your grade' },
        { name: 'Request', detail: 'Request a transcript ans so on' },
        { name: 'Payment', detail: 'Manage your payment' },
    ],
    selectedPage: { name: 'Schedule', detail: 'View your table' },

  };

  changePage = (nextPage) => {
    this.setState({
        selectedPage: this.state.pages[nextPage],
    })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="row" style={{ height: '100vh', fontSize: '24px' }}>
        <div className="col-md-3 sidenav" style={{ height: '100vh', paddingLeft: '32px' }}>
            <div style={{ width: '100%', textAlign: 'center', paddingTop: '48px', paddingBottom: '32px' }}>Student Menu</div>
            <List>
                <ListItem primaryText="Schedule" leftIcon={<ActionSchedule />} onClick={() => this.changePage(0)} />
                <ListItem primaryText="Course" leftIcon={<ActionToc />} onClick={() => this.changePage(1)} />
                <ListItem primaryText="Grade" leftIcon={<SocialSchool />} onClick={() => this.changePage(2)} />
                <ListItem primaryText="Request" leftIcon={<ActionDescription />} onClick={() => this.changePage(3)} />
                <ListItem primaryText="Payment" leftIcon={<ActionPayment />} onClick={() => this.changePage(4)} />
            </List>
        </div>
        <div className="col-md-9" style={{ paddingTop: '16px', paddingRight: '32px' }}>
            <Card>
                <CardTitle title={this.state.selectedPage.name} subtitle={this.state.selectedPage.detail} />
                <CardText>
                    <div>Content</div>
                </CardText>
             </Card>
        </div>
      </div>
    );
  }
}

export default DashboardStudent;
