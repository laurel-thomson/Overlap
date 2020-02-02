import React from 'react';
import './CreateSchedule.css';

export default class SelectHours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime : '08:00',
      endTime : '17:00'
    }
  }

  handleStartChange = (event) => {
    this.setState({
      startTime : event.target.value
    })
  }

  handleEndChange = (event) => {
    this.setState({
      endTime : event.target.value
    })
  }

  getSelectedHours = () => {
    const times = [];
    let currentTime = this.state.startTime;
    while (currentTime !== this.state.endTime) {
      times.push(currentTime);
      const splitString = currentTime.split(':');
      let hour = parseInt(splitString[0], 10);
      let minutes = splitString[1];
      if (minutes === '30') {
        hour++;
        minutes = '00';
      } else {
        minutes = '30';
      }
      if (hour < 10) {
        hour = '0' + hour;
      }
      currentTime = `${hour}:${minutes}`;
    }
    times.push(this.state.endTime);
    return times.map((time) => {
      const splitString = time.split(':');
      const minutes = splitString[1];
      let hour = parseInt(splitString[0], 10);
      const am_pm = hour < 12 ? 'AM' : 'PM';
      hour = hour % 12;
      if (hour === 0) {
        hour = 12;
      }
      if (hour < 10) {
        hour = '0' + hour;
      }
      return `${hour}:${minutes} ${am_pm}`;
    })
  }

  render() {
    return (
      <div className='select hours'>
        <p className='select-for'>select possible hours for</p>
        <p className='event-name'>{this.props.eventName}</p>
        <div className='input'>
          <label htmlFor='startTime'>Start Time</label>
          <input name='startTime' type='time' defaultValue="08:00" onChange={this.handleStartChange}/>
        </div>
        <div className='input'>
          <label htmlFor='endTime'>End Time</label>
          <input name='endTime' type='time' defaultValue="17:00" onChange={this.handleEndChange}/>
        </div>
        <button className='done active' onClick={() => this.props.handleClick(this.getSelectedHours())}>
          DONE
        </button>
      </div>
    );
  }
}
