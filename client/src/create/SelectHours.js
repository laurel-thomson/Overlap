import React from 'react';
import './CreateSchedule.css';

export default class SelectHours extends React.Component {
  render() {
    return (
      <div className='select hours'>
        <p className='select-for'>select possible hours for</p>
        <p className='event-name'>{this.props.eventName}</p>
        <div class='input'>
          <label for='startTime'>Start Time</label>
          <input name='startTime' type='time' value="08:00"/>
        </div>
        <div class='input'>
          <label for='endTime'>End Time</label>
          <input name='endTime' type='time' value="17:00"/>
        </div>
        <div class='input'>
          <label for='interval'>Time Slot Length</label>
          <select name='interval'>
            <option name='15'>15 minutes</option>
            <option name='30' selected="selected">30 minutes</option>
            <option name='60'>60 minutes</option>
          </select>
        </div>

        <button className='done' onClick={() => this.props.handleClick('newaccesscode')}>DONE</button>
      </div>
    );
  }
}
