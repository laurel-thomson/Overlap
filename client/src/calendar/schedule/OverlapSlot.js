import React from 'react';
import './Schedule.css';

export default class OverlapSlot extends React.Component {
  render() {
    let opacity = (this.props.overlap + 1) / (this.props.totalUsers + 1);
    if (this.props.totalUsers === 0) {
      opacity = 0.25;
    }
    return (
      <div className='timeslot overlap'>
        <p>{this.props.name}</p>
        <button style={{'backgroundColor' : `rgba(15, 158, 196, ${opacity})`}}>
          {this.props.overlap} / {this.props.totalUsers}
        </button>
      </div>
    );
  }
}
