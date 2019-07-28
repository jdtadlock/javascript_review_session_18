// BOOTSTRAP FILE -- The file that begins the React Process in the browser

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

import { BrowserRouter } from 'react-router-dom'; // export const BrowserRouter = ....

axios.interceptors.request.use(config => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDNlMDA0YzNjMTkwNDllZjQ5ZjRiOWIiLCJpYXQiOjE1NjQzNDQzOTZ9.Mg7QvBhPNoHuyYl6IGD1oOSCJ0X5-T-kBbJQJkOLNDQ';

  config.headers.Authorization = token;
  return config;
});

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
