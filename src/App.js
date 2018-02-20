import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader } from 'material-ui/Card';
import './App.css';

import CreateProviderContainer from './CreateProvider/Container';
import ProviderListContainer from './ProviderList/Container';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header>
            <AppBar
              title="Provider Directory"
              showMenuIconButton={false}
            />
          </header>
          <div id="cardContainer">
            <CreateProviderContainer/>
            <ProviderListContainer/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
