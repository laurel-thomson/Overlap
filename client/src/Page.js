import React from 'react'
import TopNav from './nav/TopNav.js'
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import "./Page.css"

export default class Page extends React.Component {
  render() {
    return (
      <Router history={history}>
        <TopNav />
        <Routes />
      </Router>
    );
  }
}
