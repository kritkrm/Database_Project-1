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

const titleFontSize = '24px';
const contentFontSize = '18px';
const grades = ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'];
class Grade extends Component {
    countTrueSubject = () => {
        let counter = 0;
        this.props.subject.map((element) => element.onList == true && counter++)
        return counter;
    }
  render() {
    return (
        <div className="col-xs-12" style={{ overflow: 'scroll', height: '100%' }}>
            {
                this.countTrueSubject() > 0 ?
                ['1/2560', '2/2560', '1/2561'].map((sem) => {
                    return (
                        <div style={{ widht: '100%' }}>
                            <div style={{ fontSize: '32px' }}>{sem}</div>
                            <Divider />
                            <div  style={{ paddingRight: '15%', paddingLeft: '15%', width: '100%', marginBottom: '32px' }}>
                                <Table>
                                    <TableHeader displaySelectAll={false}>
                                        <TableRow>
                                            <TableHeaderColumn style={{ fontSize: titleFontSize, width: '10%' }}></TableHeaderColumn>
                                            <TableHeaderColumn style={{ fontSize: titleFontSize, width: '60%' }}>Course</TableHeaderColumn>
                                            <TableHeaderColumn style={{ fontSize: titleFontSize, width: '30%' }}>Grade</TableHeaderColumn>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody displayRowCheckbox={false}>
                                        {
                                            this.props.subject.map((element, index) => {
                                                if (element.onList == true) {
                                                    return (
                                                        <TableRow>
                                                            <TableRowColumn style={{ fontSize: contentFontSize, width: '20%' }}>{element.courseNo}</TableRowColumn>
                                                            <TableRowColumn style={{ fontSize: contentFontSize, width: '50%' }}>{element.name}</TableRowColumn>
                                                            <TableRowColumn style={{ fontSize: contentFontSize, width: '30%' }}>{grades[index % 8]}</TableRowColumn>
                                                        </TableRow>
                                                    )
                                                }
                                            })
                                        }
                                        <TableRow>
                                            <TableRowColumn style={{ fontSize: contentFontSize, width: '2%'  }}></TableRowColumn>
                                            <TableRowColumn style={{ fontSize: contentFontSize, width: '49%'  }}>GPA: </TableRowColumn>
                                            <TableRowColumn style={{ fontSize: contentFontSize, width: '49%'  }}>GPAX: </TableRowColumn>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    )
                })
                :
                <div style={{ fontSize: '36px' }}>No course</div>
            }
        </div>
    );
  }
}

export default Grade;
