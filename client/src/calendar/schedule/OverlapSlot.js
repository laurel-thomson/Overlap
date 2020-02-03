import React from 'react';
import './Schedule.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class OverlapSlot extends React.Component {
  getTooltip = () => {
    const users = Object.keys(this.props.users);
    if (users.length > 0) {
      return (
        <div className='tooltip'>
          {Object.keys(this.props.users).map((user) => {
            return (
              <div className='tooltip-user'>
                <div className='icon'>
                 <FontAwesomeIcon icon='user' className='circleIcon' color='white' aria-hidden='true'/>
                </div>
                {user}
              </div>
            );
          })}
        </div>
      );
    }
  }

  render() {
    const overlap = Object.keys(this.props.users).length;
    let opacity = (overlap + 1) / (this.props.totalUsers + 1);
    if (this.props.totalUsers === 0) {
      opacity = 0.25;
    }
    return (
      <div className={`timeslot overlap ${overlap > 0 ? 'has-tooltip' : ''}`}>
        <p>{this.props.name}</p>
        <button style={{'backgroundColor' : `rgba(15, 158, 196, ${opacity})`}}>
          {overlap} / {this.props.totalUsers}
        </button>
        {this.getTooltip()}
      </div>
    );
  }
}
