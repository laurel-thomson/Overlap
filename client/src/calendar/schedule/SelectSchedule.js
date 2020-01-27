import React from 'react';
import SelectableDay from './SelectableDay.js';
import './Schedule.css';

export default class SelectSchedule extends React.Component {
  render() {
    const days = ['Sunday','Monday','Tuesday'];
    return (
      <div className='schedule mine'>
        {days.map((day, index) => <SelectableDay key={index} name={day} />)}
      </div>
    );
  }
}
