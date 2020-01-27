import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Schedule.css';

export default class TimeSlot extends React.Component {
  getButtonIcon = () => this.props.selected ? 'check' : 'times';

  render() {
    return (
      <div className='timeslot'>
        <p>{this.props.name}</p>
        <button className={this.props.selected ? 'selected' : 'unselected'} onClick={this.props.handleClick}>
          <FontAwesomeIcon icon={this.getButtonIcon()} className='buttonIcon' color='white'/>
        </button>
      </div>
    );
  }
}
