import React from 'react';
import SelectableDay from './SelectableDay.js';
import './Schedule.css';

export default class SelectSchedule extends React.Component {

  render() {
    const days = this.props.schedule.days;
    return (
      <div className='schedule mine'>
        {Object.keys(days).map((day) => {
          return <SelectableDay key={day} name={day} timeslots={days[day]} currentUser={this.props.currentUser} />
        })}
      </div>
    );
  }
}
