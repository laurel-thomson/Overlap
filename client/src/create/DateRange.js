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
    //TODO: get the days the user selected
    return ['Sunday 1st', 'Monday 2nd'];
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
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
