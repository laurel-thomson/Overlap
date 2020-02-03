import React from 'react';
import SelectableDay from './SelectableDay.js';
import './Schedule.css';

export default class SelectSchedule extends React.Component {

  saveSelection = (dayIndex, timeIndex, selected) => {
    const axios = require('axios').default;

    axios.put(`/${this.props.accessCode}/updateSchedule`, {
      user : this.props.currentUser,
      dayIndex : dayIndex,
      timeIndex : timeIndex,
      isAvailable : selected
    })
      .then((res) => {
        const newSchedule = this.props.schedule.slice(0); //clone the schedule object
        if (selected) {
          newSchedule[dayIndex].timeslots[timeIndex].users[this.props.currentUser] = true;
        } else {
          delete newSchedule[dayIndex].timeslots[timeIndex].users[this.props.currentUser];
        }
        this.props.updateSchedule(newSchedule);
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className='schedule mine'>
        {this.props.schedule.map((day, index) => {
          return <SelectableDay
            key={index}
            index={index}
            name={day.name}
            timeslots={day.timeslots}
            currentUser={this.props.currentUser}
            accessCode={this.props.accessCode}
            saveSelection={this.saveSelection}/>
        })}
      </div>
    );
  }
}
