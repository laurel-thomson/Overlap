import React from 'react';
import SelectableDay from './SelectableDay.js';
import './Schedule.css';

export default class SelectSchedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseDown: false,
      mouseOverAction: undefined
    };
  }

  saveSelection = (dayIndex, timeIndex, selected) => {
    const axios = require('axios').default;

    axios.put(`/${this.props.accessCode}/updateSchedule`, {
      user : this.props.currentUser,
      dayIndex : dayIndex,
      timeIndex : timeIndex,
      isAvailable : selected
    })
      .then((res) => {
        const newSchedule = this.props.schedule.slice(0); //clone the schedule object
        if (selected) {
          newSchedule[dayIndex].timeslots[timeIndex].users[this.props.currentUser] = true;
        } else {
          delete newSchedule[dayIndex].timeslots[timeIndex].users[this.props.currentUser];
        }
        this.props.updateSchedule(newSchedule);
      })
      .catch((error) => console.error(error));
  }

  isDesktop = () => {
    return window.innerWidth >= 1024;
  }

  onMouseDown = (selected, name, toggleSlot) => {
    if (!this.isDesktop) { return; }
    this.setState({
      mouseDown: true
    });
    console.log("mouse down, selected = " + selected);
    this.setState({
      mouseOverAction : selected ? 'turnOff' : 'turnOn'
    });
    toggleSlot(name);
  }

  onMouseUp = () => {
    if (!this.isDesktop) { return; }
    this.setState({
      mouseDown: false
    });
    console.log("mouse up");
  }

  onMouseOver = (name, onSlotMouseOver) => {
    if (!this.isDesktop) { return; }
    if (!this.state.mouseDown) { return; }
    console.log("mouse over");
    onSlotMouseOver(name, this.state.mouseOverAction);
  }

  render() {
    return (
      <div className='schedule mine' onMouseUp={this.onMouseUp}>
        {this.props.schedule.map((day, index) => {
          return <SelectableDay
            key={index}
            index={index}
            name={day.name}
            timeslots={day.timeslots}
            currentUser={this.props.currentUser}
            accessCode={this.props.accessCode}
            saveSelection={this.saveSelection}
            onMouseDown={this.onMouseDown}
            onMouseOver={this.onMouseOver} />
        })}
      </div>
    );
  }
}
