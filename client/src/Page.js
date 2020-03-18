import React from 'react';
import TopNav from './nav/TopNav.js';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from './routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight, faKey, faPlus, faClipboard, faUser, faUserPlus, faCheck, faTimes, faSpinner }
  from '@fortawesome/free-solid-svg-icons';

export default class Page extends React.Component {
  render() {
    library.add(fab, faAngleRight, faKey, faPlus, faClipboard, faUser, faUserPlus, faCheck, faTimes, faSpinner);

    return (
      <Router history={history}>
        <TopNav />
        <Routes />
      </Router>
    );
  }
}
