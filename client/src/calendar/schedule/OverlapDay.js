import React from 'react';
import OverlapSlot from './OverlapSlot.js';

export default class OverlapDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slots : [
         { name : '08:30', overlap : 0 },
         { name : '09:00', overlap : 5 },
         { name : '09:30', overlap : 7 },
         { name : '10:00', overlap : 10 },
         { name : '10:30', overlap : 3 },
         { name : '11:00', overlap : 4 },
      ],
      totalUsers: 10
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
