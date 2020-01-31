import React from 'react';
import SelectableDay from './SelectableDay.js';
import './Schedule.css';

export default class SelectSchedule extends React.Component {

  saveSelection = (day, timeIndex, selected) => {
    const axios = require('axios').default;

    axios.put(`http://localhost:8080/${this.props.accessCode}/updateSchedule`, {
      user : this.props.currentUser,
      day : day,
      timeIndex : timeIndex,
      isAvailable : selected
    })
      .then((res) => {
        const newSchedule = JSON.parse(JSON.stringify(this.props.schedule)); //clone the schedule object
        if (selected) {
          newSchedule[day][timeIndex].users[this.props.currentUser] = true;
        } else {
          delete newSchedule[day][timeIndex].users[this.props.currentUser];
        }
        this.props.updateSchedule(newSchedule);
      })
      .catch((error) => console.error(error));
  }

  render() {
    const days = this.props.schedule;
    return (
      <div className='schedule mine'>
        {Object.keys(days).map((day) => {
          return <SelectableDay
            key={day}
            name={day}
            timeslots={days[day]}
            currentUser={this.props.currentUser}
            accessCode={this.props.accessCode}
            saveSelection={this.saveSelection}/>
        })}
      </div>
    );
  }
}
