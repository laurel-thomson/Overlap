import React from 'react';
import Day from './Day.js'
import './Schedule.css';

export default class OverlapSchedule extends React.Component {
  render() {
    return (
      <div className='schedule overlap'>
        <p>overlap schedule</p>
        <Day name='Sunday' />
        <Day name='Monday' />
        <Day name='Tuesday' />
      </div>
    );
  }
}
