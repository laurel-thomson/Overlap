import React from 'react';
import Day from './Day.js';
import './Schedule.css';

export default class SelectSchedule extends React.Component {
  render() {
    const days = ['Sunday','Monday','Tuesday'];
    return (
      <div className='schedule mine'>
        {days.map((day, index) => <Day key={index} name={day} />)}
      </div>
    );
  }
}
