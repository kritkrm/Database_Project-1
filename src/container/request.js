import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginBottom: 16,
    },
    button: {
        margin: 12,
        marginBottom: 32,
    },
  };
const titleFontSize = '18px';
const contentFontSize = '18px';
class Request extends Component {
    
  render() {
    return (
        <div className="col-xs-12">
            <Divider />
            <div style={{ fontSize: '32px', marginBottom: '24px', marginTop: '16px' }}>Request Form</div>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" style={{ paddingLeft: '16px' }}>
                <RadioButton
                    value="transcript"
                    label="Transcript"
                    style={styles.radioButton}
                />
                <RadioButton
                    value="ใบรับรอง"
                    label="ใบรับรอง"
                    style={styles.radioButton}
                />
                <RadioButton
                    value="graduation"
                    label="Graduation"
                    style={styles.radioButton}
                />
            </RadioButtonGroup>
            <RaisedButton label="Send Request" primary={true} style={styles.button} />
            <Divider />
            <div style={{ fontSize: '32px', marginBottom: '16px', marginTop: '64px'  }}>Request History</div>
            <div style={{ paddingRight: '64px', width: '100%', paddingLeft: '64px' }}>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn style={{ fontSize: titleFontSize, width: '20%' }}>No.</TableHeaderColumn>
                            <TableHeaderColumn style={{ fontSize: titleFontSize, width: '50%' }}>Request Type</TableHeaderColumn>
                            <TableHeaderColumn style={{ fontSize: titleFontSize, width: '30%' }}>Date</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {
                            [1, 2, 3, 4].map((element) => {
                                return (
                                    <TableRow>
                                        <TableRowColumn style={{ fontSize: contentFontSize, width: '20%' }}>{element}</TableRowColumn>
                                        <TableRowColumn style={{ fontSize: contentFontSize, width: '50%' }}>{element % 2 ? 'Transcript' : 'ใบรับรอง'}</TableRowColumn>
                                        <TableRowColumn style={{ fontSize: contentFontSize, width: '30%' }}>{element + ' JAN 2018'}</TableRowColumn>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    );
  }
}

export default Request;