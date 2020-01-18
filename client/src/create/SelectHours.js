import React from 'react';

export default class SelectHours extends React.Component {
  render() {
    return (
      <div>
        <p>select possible hours for</p>
        <p>{this.props.eventName}</p>
        <label for="startTime">Start Time</label>
        <input name="startTime" type="time" />
        <label for="endTime">End Time</label>
        <input name="endTime" type="time" />
        <label for="interval">Time Slot Length</label>
        <select>
          <option name="15">15 minutes</option>
          <option name="30">30 minutes</option>
          <option name="60">60 minutes</option>
        </select>
        <button onClick={() => this.props.handleClick('newaccesscode')}>DONE</button>
      </div>
    );
  }
}
