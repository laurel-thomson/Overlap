import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Schedule.css';

export default class SelectableSlot extends React.Component {
  getButtonIcon = () => this.props.selected ? 'check' : 'times';

  render() {
    return (
      <div className='timeslot selectable'>
        <p>{this.props.name}</p>
        <button 
          className={this.props.selected ? 'selected' : 'unselected'} 
          onMouseOver={this.props.onMouseOver}
          onMouseDown={this.props.onMouseDown}>
            <FontAwesomeIcon icon={this.getButtonIcon()} className='buttonIcon' color='white'/>
        </button>
      </div>
    );
  }
}
