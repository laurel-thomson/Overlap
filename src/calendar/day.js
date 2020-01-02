import React from 'react'
import TimeSlot from './timeslot.js'

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: Array(10).fill('white')
    };
  }

  onClickHandler(index) {
    const slots = this.state.slots.slice();
    slots[index] = this.state.slots[index] === 'white' ? 'green' : 'white';
    this.setState({
      slots: slots
    });
  }

  render() {
    return (
      <div className="day">
        <h4>{this.props.name}</h4>
        {this.state.slots.map((slot, index) => <TimeSlot color={slot} onClick={() => this.onClickHandler(index)}/> )}
      </div>
    );
  }
}
