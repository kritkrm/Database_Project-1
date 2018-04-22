import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Grade from './grade';

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const ListExampleSelectable = () => (
    <div className="row" style={{ height: '100%' }}>
    <div className="col-xs-4">
    <SelectableList defaultValue={3}>
      <Subheader>Student List</Subheader>
      <ListItem
        value={1}
        primaryText="Net Phongpisit"
      />
      <ListItem
        value={3}
        primaryText="Burin Naowarat"
      />
      <ListItem
        value={4}
        primaryText="Manussawin Tepsus"
      />
      <ListItem
        value={5}
        primaryText="Aj.Chal U-nhai"
      />
    </SelectableList>
    </div>
    <div className="col-xs-8" style={{ overflow: 'scroll', height: '100%' }}>
        <div style={{ overflow: 'scroll' }}>
        <Grade subject={[{courseNo: '2110101', name: 'Python', onList: true}, {courseNo: '2110101', name: 'Python', onList: true}, {courseNo: '2110101', name: 'Python', onList: true}]} onReduce={true} />
        </div>
    </div>
    </div>
);

export default ListExampleSelectable;