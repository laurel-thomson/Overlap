import React from 'react';
import DayPicker, {DateUtils} from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './DatePicker.css';


export default class SpecificDays extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      from : undefined,
      to: undefined
    }
  }

  componentDidMount() {
    this.props.getSelectedDays(this.getSelectedDays);
  }

  getSelectedDays = () => {
    const dates = [];
    let currentDate = this.state.from;
    let increment = 1;
    while (currentDate <= this.state.to) {
      dates.push(currentDate);
      currentDate = new Date();
      currentDate.setDate(this.state.from.getDate() + increment);
      increment++;
    }
    return dates.map((date) => {
      const splitString = date.toDateString().split(' ');
      return `${splitString[0]} - ${splitString[1]} ${splitString[2]}, ${splitString[3]}`;
    });
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.props.updateHasSelection(range.from !== undefined && range.to !== undefined);
    this.setState(range);
  };

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <DayPicker
          className='range-picker'
          numberOfMonths={2}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
    );
  }
}
