import React from 'react';
import SelectableSlot from './SelectableSlot.js';
import './Schedule.css';

export default class SelectableDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slots : [
         { name : '08:30', selected : false },
         { name : '09:00', selected : true },
         { name : '09:30', selected : false },
      ]
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
