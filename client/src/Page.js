import React from 'react';
import TopNav from './nav/TopNav.js';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faKey, faPlus, faClipboard, faUser, faUserPlus, faCheck, faTimes }
  from '@fortawesome/free-solid-svg-icons';
import "./Page.css";

export default class Page extends React.Component {
  render() {
    library.add(fab, faAngleRight, faKey, faPlus, faClipboard, faUser, faUserPlus, faCheck, faTimes);

    return (
      <Router history={history}>
        <TopNav />
        <Routes />
      </Router>
    );
  }
}
