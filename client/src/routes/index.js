import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home/Home.js';
import CreateSchedule from '../create/CreateSchedule.js'
import Calendar from '../calendar/Calendar.js';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" exact component={CreateSchedule} />
      <Route path="/:id" component={Calendar} />
    </Switch>
  );
}
