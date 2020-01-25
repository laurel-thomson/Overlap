import React from 'react';
import Day from './schedule/Day.js';

export default class SelectSchedule extends React.Component {
  render() {
    return (
      <div className='select-schedule'>
        <p>my schedule</p>
        <Day name='Sunday' />
        <Day name='Monday' />
        <Day name='Tuesday' />
      </div>
    );
  }
}
