import React from 'react'
import Day from './day.js'
import './calendar.css'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    }
  }

  render() {
    return (
      <div className="calendar">
        {this.state.days.map((day) => <Day name={day}/>)}
      </div>
    );
  }
}
