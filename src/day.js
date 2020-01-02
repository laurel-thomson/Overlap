import React from 'react'
import TimeSlot from './timeslot.js'

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: Array(10).fill('white')
    };
  }

  render() {
    return (
      <div className="day">
        <h4>{this.props.name}</h4>
        {this.state.slots.map((slot) => <TimeSlot color={slot}/> )}
      </div>
    );
  }
}
