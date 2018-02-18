import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import './ProviderList.css'

class ProviderListItem extends Component {
  render() {
    const { lastName, firstName, email, uuid, specialty, practiceName } = this.props.provider;
    return (
      <TableRow>
        <TableRowColumn>{lastName}</TableRowColumn>
        <TableRowColumn>{firstName}</TableRowColumn>
        <TableRowColumn>{email}</TableRowColumn>
        <TableRowColumn>{specialty}</TableRowColumn>
        <TableRowColumn>{practiceName}</TableRowColumn>
      </TableRow>
    );
  }
}

class ProviderList extends Component {
  render () {
    return (
      <Card className="ProviderList">
        <CardHeader title="Provider List"/>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>First Name</TableHeaderColumn>
              <TableHeaderColumn>Email Address</TableHeaderColumn>
              <TableHeaderColumn>Specialty</TableHeaderColumn>
              <TableHeaderColumn>Practice Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.props.providers.map(provider =>
              <ProviderListItem provider={provider} />
            )}
          </TableBody>
        </Table>
      </Card>
    )
  }
}



export default ProviderList;
