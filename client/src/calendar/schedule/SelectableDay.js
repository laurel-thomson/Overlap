import React from 'react';
import SelectableSlot from './SelectableSlot.js';
import './Schedule.css';

export default class SelectableDay extends React.Component {
  constructor(props) {
    super(props);
    const slots = [];
    this.props.timeslots.map((timeslot) => {
      let selected = false;
      if (timeslot.users) {
        selected = Object.keys(timeslot.users).filter((user) => user === this.props.currentUser).length > 0;
      }
      slots.push({ name : timeslot.time, selected : selected });
    });
    this.state = {
      slots : slots
    }
  }

  toggleSlot = (time) => {
    const updatedSlots = this.state.slots.map((slot, index) => {
      if (slot.name === time) {
        let selected = !slot.selected;
        this.props.saveSelection(this.props.name, index, selected);
        return { name : slot.name, selected : selected };
      } else {
        return slot;
      }
    });
    this.setState({
      slots : updatedSlots
    });
  }

  render() {
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
