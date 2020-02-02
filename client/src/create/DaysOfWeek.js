import React from 'react';
import './CreateSchedule.css';

export default class DaysOfWeek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Sunday : true,
      Monday : true,
      Tuesday : true,
      Wednesday: true,
      Thursday : true,
      Friday : true,
      Saturday : true
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
                <input type='checkbox' name={day} onClick={this.handleClick} defaultChecked />
                {day}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
