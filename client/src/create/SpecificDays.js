import React from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DatePicker.css';

export default class SpecificDays extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDays : []
    }
  }

  componentDidMount() {
    this.props.getSelectedDays(this.getSelectedDays);
  }

  getSelectedDays = () => {
    return this.state.selectedDays.map((date) => {
      const splitString = date.toDateString().split(' ');
      return `${splitString[0]} - ${splitString[1]} ${splitString[2]}, ${splitString[3]}`;
    });
  }

  handleDayClick = (day, {selected}) => {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    }  else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  };

  render() {
    return (
      <DayPicker
        className='specific-picker'
        numberOfMonths={2}
        selectedDays={this.state.selectedDays}
        onDayClick={this.handleDayClick}
      />
    );
  }
}
