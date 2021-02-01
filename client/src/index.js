import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'handsontable/dist/handsontable.full.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from '../src/redux/store'
import "@silevis/reactgrid/styles.css";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
