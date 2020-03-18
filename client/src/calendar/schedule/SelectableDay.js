import React from 'react';
import SelectableSlot from './SelectableSlot.js';
import './Schedule.css';

export default class SelectableDay extends React.Component {
  constructor(props) {
    super(props);
    const slots = [];
    this.props.timeslots.forEach((timeslot) => {
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
        this.props.saveSelection(this.props.index, index, selected);
        return { name : slot.name, selected : selected };
      } else {
        return slot;
      }
    });
    this.setState({
      slots : updatedSlots
    });
  }

  onSlotMouseOver = (name, mouseOverAction) => {
    const slot = this.state.slots.find((s) => s.name === name);
    if (slot.selected && mouseOverAction === 'turnOn') { return; }
    if (!slot.selected && mouseOverAction === 'turnOff') { return; }

    this.toggleSlot(name);
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
              onMouseDown={() => this.props.onMouseDown(slot.selected, slot.name, this.toggleSlot)}
              onMouseOver={() => this.props.onMouseOver(slot.name, this.onSlotMouseOver)}/>
          )}
        </div>
      </div>
    );
  }
}
