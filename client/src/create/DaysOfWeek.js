import React from 'react';
import './CreateSchedule.css';

export default class DaysOfWeek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Sunday : false,
      Monday : false,
      Tuesday : false,
      Wednesday: false,
      Thursday : false,
      Friday : false,
      Saturday : false
    }
    this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  }

  componentDidMount() {
    this.props.getSelectedDays(this.getSelectedDays);
  }

  getSelectedDays = () => {
    return this.daysOfWeek.filter((day) => this.state[day])
  }

  handleClick = (event) => {
    const day = event.target.name;
    let isSelected = this.state[day];
    let hasSelection = false;
    Object.keys(this.state).forEach((d) => {
      if (d === day) {
        if (!this.state[d]) {
          hasSelection = true;
        }
      } else {
        if (this.state[d]) {
          hasSelection = true;
        }
      }
    });
    this.props.updateHasSelection(hasSelection);
    this.setState({
      [day] : !isSelected
    })
  }

  render() {
    return (
      <div className='days-of-week'>
        {this.daysOfWeek.map((day, index) => {
          return (
            <div className='day-of-week' key={index}>
              <label>
                <input type='checkbox' name={day} onClick={this.handleClick} />
                {day}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
