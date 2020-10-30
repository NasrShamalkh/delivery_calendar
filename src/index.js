import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// react redux configration
import Store from './redux_store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
