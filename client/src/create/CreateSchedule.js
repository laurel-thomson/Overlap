import React from 'react';
import { withRouter, Redirect } from "react-router-dom";
import SelectDays from './SelectDays.js';
import SelectHours from './SelectHours.js';

class CreateSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent : 'days',
      selectedDays :  [],
      selectedHours : []
    };
  }

  getComponent = () => {
    if (!this.props.location.eventName) {
      return <Redirect to='/' />
    }
    let component;
    switch(this.state.currentComponent) {
      case 'days':
        component = <SelectDays handleClick={this.moveToHours} eventName={this.props.location.eventName}/>
        break;
      default:
        component = <SelectHours handleClick={this.createSchedule} eventName={this.props.location.eventName}/>
        break
    }
    return component;
  }

  moveToHours = (selectedDays) => {
    this.setState({
      selectedDays : selectedDays,
      currentComponent : 'hours'
    });
  }

  createSchedule = (selectedHours) => {
    const name = this.props.location.eventName;
    const accessCode = Math.random().toString(36).substr(2, 6);
    const schedule = [];
    this.state.selectedDays.forEach((day) => {
      const timeslots = [];
      selectedHours.forEach((timeslot) => {
        timeslots.push({ time : timeslot})
      });
      const newDay = {name : day, timeslots : timeslots}
      schedule.push(newDay);
    });
    const axios = require('axios').default;
    axios.post('http://localhost:8080/', {
      scheduleName : name,
      accessCode : accessCode,
      schedule : schedule
    })
      .then((result) => {
        this.props.history.push(`/${accessCode}`);
      })
      .catch((error) => console.log(error))
  }

  render() {
    return(
      <div className='create-schedule'>
        {this.getComponent()}
      </div>
    );
  }
}

export default withRouter(CreateSchedule);
