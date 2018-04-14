import React, { Component } from 'react';
import '../style/dashboard.css';

import {List, ListItem} from 'material-ui/List';
import ActionDescription from 'material-ui/svg-icons/action/description';
import ActionSchedule from 'material-ui/svg-icons/action/schedule';
import ActionToc from 'material-ui/svg-icons/action/toc';
import SocialSchool from 'material-ui/svg-icons/social/school';
import SocialPerson from 'material-ui/svg-icons/social/person';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class DashboardTeacher extends Component {
  
  state = {
    pages: [
        { name: 'Schedule', detail: 'View your course table' },
        { name: 'Grade', detail: 'Update your advisees\' grade' },
        { name: 'Students', detail: 'View your advisees\' detail' },
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
            <div style={{ width: '100%', textAlign: 'center', paddingTop: '48px', paddingBottom: '32px' }}>Instructor Menu</div>
            <List>
                <ListItem primaryText="Schedule" leftIcon={<ActionSchedule />} onClick={() => this.changePage(0)} />
                <ListItem primaryText="Grade" leftIcon={<SocialSchool />} onClick={() => this.changePage(1)} />
                <ListItem primaryText="Students" leftIcon={<SocialPerson />} onClick={() => this.changePage(2)} />
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

export default DashboardTeacher;
