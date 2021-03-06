import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { reducer, initialState } from './redux';

let store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App id="app"/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
