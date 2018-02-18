import React, { Component } from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import './ProviderList.css'

class ProviderList extends Component {
  render () {
    return (
      <Card className="ProviderList">
        <CardHeader title="Provider List"/>
      </Card>
    )
  }
}

export default ProviderList;
