import React from 'react';
import OverlapDay from './OverlapDay.js'
import './Schedule.css';

export default class OverlapSchedule extends React.Component {
  render() {
    return (
      <div className='schedule overlap'>
        <OverlapDay name='Sunday' />
        <OverlapDay name='Monday' />
        <OverlapDay name='Tuesday' />
      </div>
    );
  }
}
