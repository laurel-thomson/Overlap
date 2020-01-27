import React from 'react';
import OverlapSlot from './OverlapSlot.js';

export default class OverlapDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slots : [
         { name : '08:30', overlap : 0 },
         { name : '09:00', overlap : 2 },
         { name : '09:30', overlap : 1 },
      ],
      totalUsers: 3
    }
  }

  render() {
    return (
      <div className='day overlap'>
        <h3>{this.props.name}</h3>
        <hr className='header-line' />
        <div className='time-slots'>
          {this.state.slots.map((slot, index) =>
            <OverlapSlot
              key={index}
              name={slot.name}
              overlap={slot.overlap}
              totalUsers={this.state.totalUsers}
            />
          )}
        </div>
      </div>
    );
  }
}
