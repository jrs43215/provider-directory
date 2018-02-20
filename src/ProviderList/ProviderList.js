import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { sortTypes } from '../shared/sorting';
import { cyan700 } from 'material-ui/styles/colors';
import './ProviderList.css'

class ProviderList extends Component {

  searchFieldStyle = {
    backgroundColor: cyan700,
    borderRadius: '0.5em',
    paddingLeft: '1em',
  }

  underlineStyle = {
    borderColor: cyan700,
  }

  deleteSelected () {
    console.log(this.props.selected);
    this.props.removeProvider(this.props.selected);
    this.props.selectProvider('');
  }

  updateSelected (row) {
    if (row === undefined) {
      this.props.selectProvider('');
    } else {
      const provider = this.props.providers[row];
      this.props.selectProvider(provider.uuid);
    }
  }

  search (newValue) {
    this.props.changeSearch(newValue);
  }

  toggleSort (field) {
    if (this.props.sortField !== field) {
      this.props.changeSort(field, sortTypes.asc);
      return;
    }
    if (this.props.sortType === sortTypes.asc) {
      this.props.changeSort(field, sortTypes.desc);
      return;
    }
    this.props.changeSort(null, null);
  }

  getIcon(field) {
    if (this.props.sortField !== field) {
      const style = { color: 'white' };
      return (<i style={style} className='material-icons'>arrow_upward</i>);
    }
    if (this.props.sortType === sortTypes.asc) {
      return (<i className="material-icons">arrow_upward</i>)
    }
      return <i className='material-icons'>arrow_downward</i>
  }

  render () {
    return (
      <Card className="ProviderList">
        <AppBar title='Provider List'
                showMenuIconButton={false}
                iconElementRight={
                  <div style={this.searchFieldStyle}>
                    <TextField hintText='Search'
                               underlineStyle={this.underlineStyle}
                               underlineFocusStyle={this.underlineStyle}
                               onChange={(e, v) => this.search(v)}
                    />
                  </div>
                }
          />
        <Table
          height="45em"
          onRowSelection={(rows) => this.updateSelected(rows[0])}>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>
                <div onClick={() => this.toggleSort('lastName')}>
                  Last Name {this.getIcon('lastName')}
                </div>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <div onClick={() => this.toggleSort('firstName')}>
                  First Name {this.getIcon('firstName')}
                </div>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <div onClick={() => this.toggleSort('email')}>
                  Email Address {this.getIcon('email')}
                </div>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <div onClick={() => this.toggleSort('specialty')}>
                  Specialty {this.getIcon('specialty')}
                </div>
              </TableHeaderColumn>
              <TableHeaderColumn>
                <div onClick={() => this.toggleSort('practiceName')}>
                  Practice Name {this.getIcon('practiceName')}
                </div>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {this.props.providers.map(provider =>
              <TableRow key={provider.uuid} selected={this.props.selected === provider.uuid}>
                <TableRowColumn>{provider.lastName}</TableRowColumn>
                <TableRowColumn>{provider.firstName}</TableRowColumn>
                <TableRowColumn>{provider.email}</TableRowColumn>
                <TableRowColumn>{provider.specialty}</TableRowColumn>
                <TableRowColumn>{provider.practiceName}</TableRowColumn>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className='tableFooter'>
          <RaisedButton label="Delete"
            secondary={true}
            disabled={this.props.selected === ''}
            onClick={() => this.deleteSelected()}
          />
        </div>
      </Card>
    )
  }
}



export default ProviderList;
