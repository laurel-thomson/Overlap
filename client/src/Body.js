import React from 'react'
import { Router } from 'react-router-dom';
import history from './services/history';
import Home from './home/Home.js'
import Routes from './routes';

export default class Body extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}
