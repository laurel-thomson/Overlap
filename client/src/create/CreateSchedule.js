import React from 'react';
import { withRouter } from "react-router-dom";
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
    let component;
    switch(this.state.currentComponent) {
      case 'days':
        component = <SelectDays handleClick={this.moveToHours}/>
        break;
      default:
        component = <SelectHours handleClick={this.createSchedule}/>
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
    const accessCode = '1234'; //TODO: create an access code
    const schedule = {};
    this.state.selectedDays.forEach((day) => {
      let days = [];
      selectedHours.forEach((timeslot) => {
        days.push({ time : timeslot})
      });
      schedule[day] = days;
    });
    console.log(schedule);
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
