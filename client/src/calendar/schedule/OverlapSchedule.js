import React from 'react';
import OverlapDay from './OverlapDay.js'
import UserList from './UserList.js'
import './Schedule.css';

export default class OverlapSchedule extends React.Component {
  calculateSchedule = () => {
    const totalUsers = this.props.users;
    const schedule = this.props.schedule;
    return schedule.map((day, index) => {
      const timeslots = day.timeslots.map((timeslot) => {
        return { name : timeslot.time, users : timeslot.users };
      });
      return <OverlapDay key={index} name={day.name} timeslots={timeslots} totalUsers={totalUsers} />
    });
  }
  render() {
    return (
      <div className='overlap-cont'>
        <UserList users={this.props.users}/>
        <div className='schedule overlap'>
          {this.calculateSchedule()}
        </div>
      </div>
    );
  }
}
