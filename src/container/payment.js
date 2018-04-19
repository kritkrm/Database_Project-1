import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import React, { Component } from 'react';


import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


class Request extends Component {
    
  render() {
    return (
        <div className="col-xs-12">
        <div className="col-xs-4" style={{ padding: '32px' }}> 
        <Card style={{ display: 'inline-block', width: '100%' }}>
            <div style={{ fontSize: '24px', padding: '16px', paddingTop: '32px', paddingBottom: '32px' }}>
                Type: ??????
            </div>
        </Card>
        </div>
        <div className="col-xs-4" style={{ padding: '32px' }}> 
        <Card style={{ display: 'inline-block', width: '100%' }}>
            <div style={{ fontSize: '24px', padding: '16px', paddingTop: '32px', paddingBottom: '32px' }}>
                Faculty: Engineering
            </div>
        </Card>
        </div>
        <div className="col-xs-4" style={{ padding: '32px' }}> 
        <Card style={{ display: 'inline-block', width: '100%' }}>
            <div style={{ fontSize: '24px', padding: '16px' , paddingTop: '32px', paddingBottom: '32px'}}>
                Cost: 21000
            </div>
        </Card>
        </div>
        </div>
    );
  }
}

export default Request;