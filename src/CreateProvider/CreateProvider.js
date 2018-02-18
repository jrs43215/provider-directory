import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import './CreateProvider.css'

class CreateProvider extends Component {
  render () {
    return (
      <Card className="CreateProvider">
        <CardHeader title="Create Provider"/>
      </Card>
    )
  }
}

export default CreateProvider;
