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
    //TODO: get the days the user selected
    return ['3 April', '2 April'];
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
