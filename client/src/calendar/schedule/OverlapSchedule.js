import React from 'react';
import OverlapDay from './OverlapDay.js'
import './Schedule.css';

export default class OverlapSchedule extends React.Component {
  calculateSchedule = () => {
    const totalUsers = this.props.users;
    const schedule = this.props.schedule.days;
    return Object.keys(schedule).map((day) => {
      const timeslots = schedule[day].map((index) => {
        return { name : index.time, overlap : index.users ? Object.keys(index.users).length : 0 };
      });
      return <OverlapDay key={day} name={day} timeslots={timeslots} totalUsers={totalUsers.length} />
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
