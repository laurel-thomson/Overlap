import React from 'react';
import './CreateSchedule.css';

export default class DaysOfWeek extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSelectedDays(this.getSelectedDays);
  }

  getSelectedDays = () => {
    //TODO: get the days the user selected
    return ['Sunday', 'Monday'];
  }

  render() {
    const daysofweek = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ]
    return (
      <div className='days-of-week'>
        {daysofweek.map((day, index) => {
          return (
            <div className='day-of-week' key={index}>
              <label>
                <input type='checkbox' name={day} defaultChecked />
                {day}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
