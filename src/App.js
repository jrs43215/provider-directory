import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader } from 'material-ui/Card';
import './App.css';

import CreateProvider from './CreateProvider';
import ProviderList from './ProviderList';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header>
            <AppBar
              title="Provider Directory"
            />
          </header>
          <div id="cardContainer">
            <CreateProvider/>
            <ProviderList/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
