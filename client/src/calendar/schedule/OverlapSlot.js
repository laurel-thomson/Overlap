import React from 'react';
import './Schedule.css';

export default class OverlapSlot extends React.Component {
  render() {
    return (
      <div className='timeslot'>
        <p>{this.props.name}</p>
        <button>
          {this.props.overlap} / {this.props.totalUsers}
        </button>
      </div>
    );
  }
}
