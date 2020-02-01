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
    //TODO: get the selected hours
    return ['08:00','08:30','09:00','09:30','10:00'];
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
        <button className='done' onClick={() => this.props.handleClick('newaccesscode', this.getSelectedHours())}>
          DONE
        </button>
      </div>
    );
  }
}
