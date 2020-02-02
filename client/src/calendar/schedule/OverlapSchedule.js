import React from 'react';
import OverlapDay from './OverlapDay.js'
import './Schedule.css';

export default class OverlapSchedule extends React.Component {
  calculateSchedule = () => {
    const totalUsers = this.props.users;
    const schedule = this.props.schedule;
    return schedule.map((day, index) => {
      const timeslots = day.timeslots.map((timeslot) => {
        return { name : timeslot.time, overlap : timeslot.users ? Object.keys(timeslot.users).length : 0 };
      });
      return <OverlapDay key={index} name={day.name} timeslots={timeslots} totalUsers={totalUsers.length} />
    });
  }
  render() {
    return (
      <div className='schedule overlap'>
        {this.calculateSchedule()}
      </div>
    );
  }
}
