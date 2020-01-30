import React from 'react';
import SelectableSlot from './SelectableSlot.js';
import './Schedule.css';

export default class SelectableDay extends React.Component {
  constructor(props) {
    super(props);
    const slots = [];
    this.props.timeslots.map((timeslot) => {
      slots.push({ name : timeslot.time, selected : false });
    });
    this.state = {
      slots : slots
    }
  }

  toggleSlot = (name) => {
    const updatedSlots = this.state.slots.map((slot) => {
      if (slot.name === name) {
        return { name : slot.name, selected : !slot.selected };
      } else {
        return slot;
      }
    });
    this.setState({
      slots : updatedSlots
    });
  }

  render() {
    console.log(this.props.timeslots)
    return (
      <div className='day selectable'>
        <h3>{this.props.name}</h3>
        <hr className='header-line' />
        <div className='time-slots'>
          {this.state.slots.map((slot, index) =>
            <SelectableSlot
              key={index}
              name={slot.name}
              selected={slot.selected}
              handleClick={() => this.toggleSlot(slot.name)}/>
          )}
        </div>
      </div>
    );
  }
}
