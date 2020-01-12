import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home.js';
import Calendar from '../calendar/calendar.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Calendar} />
    </Switch>
  );
}
