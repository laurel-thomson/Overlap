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

  componentDidMount() {
    window.addEventListener('beforeunload', this.beforeunload.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.beforeunload.bind(this));
  }

  beforeunload(e) {
    e.preventDefault();
    e.returnValue = true;
  }

  getComponent = () => {
    let component;
    switch(this.state.currentComponent) {
      case 'days':
        component = <SelectDays handleClick={this.moveToHours} eventName={this.props.location.inputValue}/>
        break;
      default:
        component = <SelectHours handleClick={this.createSchedule} eventName={this.props.location.inputValue}/>
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

  createSchedule = (name, selectedHours) => {
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
      .then((result) => console.log(result))
      .catch((error) => console.log(error))
    this.props.history.push(`/${name}`);
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
