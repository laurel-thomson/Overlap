import React from 'react';
import DaysOfWeek from './DaysOfWeek.js';
import SpecificDays from './SpecificDays.js';

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
      <div>
        <p>select possible days for</p>
        <p>{this.props.eventName}</p>
        <ul className="dayOptions">
          <li onClick={() => this.switchDayOption('specific')}>Specific Days</li>
          <li onClick={() => this.switchDayOption('week')}>Days of the Week</li>
        </ul>
        {this.getComponent()}
        <button onClick={this.props.handleClick}>NEXT</button>
      </div>
    );
  }
}
