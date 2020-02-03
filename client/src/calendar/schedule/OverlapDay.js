import React from 'react';
import OverlapSlot from './OverlapSlot.js';

export default class OverlapDay extends React.Component {
  render() {
    return (
      <div className='day overlap'>
        <h3>{this.props.name}</h3>
        <hr className='header-line' />
        <div className='time-slots'>
          {this.props.timeslots.map((slot, index) =>
            <OverlapSlot
              key={index}
              name={slot.name}
              users={slot.users}
              totalUsers={this.props.totalUsers}
            />
          )}
        </div>
      </div>
    );
  }
}
