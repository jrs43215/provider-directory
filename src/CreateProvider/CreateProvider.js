import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { contains } from 'ramda';
import { validate } from '../models/providers';
import './CreateProvider.css'

class CreateProvider extends Component {
  provider = {};

  state = { missing: [], valid: false };

  updateProvider(field, event) {
    const value = event.target.value;
    if (value === '') {
      delete this.provider[field];
    }
    else {
      this.provider[field] = value;
    }
    this.findMissing();
  }

  createProvider () {
    this.props.addProvider(this.provider);
  }

  isMissing (field) {
    const rv = contains(field, this.state.missing);
    return rv;
  }

  findMissing () {
    const missing = validate(this.provider).missing;
    const valid = missing.length === 0;
    console.log(missing, valid);
    this.setState({ missing, valid });
  }

  render () {
    return (
      <Card className="CreateProvider">
        <AppBar title='Create Provider'
                showMenuIconButton={false}
        />
        <div id="createProviderForm">
          {this.isMissing('lastName') ? (
            <TextField hintText="Last Name"
                       fullWidth={true}
                       onChange={(e) => this.updateProvider('lastName', e)}
                       errorText='This field is required.'
            />) : (
            <TextField hintText="Last Name"
                       fullWidth={true}
                       onChange={(e) => this.updateProvider('lastName', e)}
            />)
          }
          {this.isMissing('firstName') ? (
            <TextField hintText="First Name"
                       fullWidth={true}
                       onChange={(e) => this.updateProvider('firstName', e)}
                       errorText='This field is required.'
            />) : (
            <TextField hintText="First Name"
                       fullWidth={true}
                       onChange={(e) => this.updateProvider('firstName', e)}
            />)
          }
          {this.isMissing('email') ? (
            <TextField hintText="Email Address"
                       fullWidth={true}
                       onChange={(e) => this.updateProvider('email', e)}
                       errorText='This field is required.'
            />) : (
            <TextField hintText="Email Address"
                       fullWidth={true}
                       onChange={(e) => this.updateProvider('email', e)}
            />)
          }
          <TextField hintText="Specialty"
                     fullWidth={true}
                     onChange={(e) => this.updateProvider('specialty', e)}
          />
          <TextField hintText="Provider Name"
                     fullWidth={true}
                     onChange={(e) => this.updateProvider('providerName', e)}
          />
          <RaisedButton
            style={{ width: '5em', marginTop: '1em' }}
            secondary={true}
            disabled={!this.state.valid}
            label="Create"
            onClick={() => this.createProvider()} />
        </div>
      </Card>
    )
  }
}

export default CreateProvider;
