import React from 'react';
import Day from './Day.js'

export default class MySchedule extends React.Component {
  render() {
    return (
      <div className='schedule mine'>
        <p>my schedule</p>
        <Day name='Sunday' />
        <Day name='Monday' />
        <Day name='Tuesday' />
      </div>
    );
  }
}
