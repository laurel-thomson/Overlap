import React from 'react';
import './CreateSchedule.css';

export default class SelectHours extends React.Component {
  render() {
    return (
      <div className='select hours'>
        <p className='select-for'>select possible hours for</p>
        <p className='event-name'>{this.props.eventName}</p>
        <div className='input'>
          <label htmlFor='startTime'>Start Time</label>
          <input name='startTime' type='time' defaultValue="08:00"/>
        </div>
        <div className='input'>
          <label htmlFor='endTime'>End Time</label>
          <input name='endTime' type='time' defaultValue="17:00"/>
        </div>
        <button className='done' onClick={() => this.props.handleClick('newaccesscode')}>DONE</button>
      </div>
    );
  }
}
