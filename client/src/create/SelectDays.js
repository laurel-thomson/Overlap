import React from 'react';
import DaysOfWeek from './DaysOfWeek.js';
import SpecificDays from './SpecificDays.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CreateSchedule.css';

export default class SelectDays extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dayOption : 'specific'
    }
  }

  getComponent = () => {
    switch(this.state.dayOption) {
      case 'specific':
        return <SpecificDays />
      case 'week':
        return <DaysOfWeek />
    }
  };

  switchDayOption = (option) => {
    this.setState({
      dayOption : option
    })
  };

  render() {
    return (
      <div className='select days'>
        <p className='select-for'>select possible days for</p>
        <p className='event-name'>{this.props.eventName}</p>
        <ul className='dayOptions'>
          <li className={ this.state.dayOption === 'specific' ? 'selected' : '' }
            onClick={() => this.switchDayOption('specific')}>Specific Days</li>
          <li className={ this.state.dayOption === 'week' ? 'selected' : '' }
          onClick={() => this.switchDayOption('week')}>Days of the Week</li>
        </ul>
        {this.getComponent()}
        <button onClick={this.props.handleClick}>NEXT <FontAwesomeIcon icon='angle-right' className='arrow'/></button>
      </div>
    );
  }
}
