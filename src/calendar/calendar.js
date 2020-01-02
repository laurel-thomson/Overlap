import React from 'react';
import TableDragSelect from 'react-table-drag-select';
import 'react-table-drag-select/style.css';
import './calendar.css'
import TimeSlot from './timeslot.js'

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    const startTime = 8;
    const endTime = 5;
    const numRows = 8;

    let cells = [];
    for (let i = 0; i < numRows + 1; i++) {
      cells.push(Array(days.length+1).fill('false'));
    }

    this.state = {
      cells: cells
    };
  }

  render = () =>
    <TableDragSelect
      value={this.state.cells}
      onChange={cells => this.setState({ cells })}
    >
      <tr>
       <td disabled />
       <td disabled>Monday</td>
       <td disabled>Tuesday</td>
       <td disabled>Wednesday</td>
       <td disabled>Thursday</td>
       <td disabled>Friday</td>
       <td disabled>Saturday</td>
       <td disabled>Sunday</td>
     </tr>
      <tr>
        <td disabled>10:00</td>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
      </tr>
      <tr>
        <td disabled>11:00</td>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
      </tr>
      <tr>
        <td disabled>12:00</td>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
      </tr>
      <tr>
        <td disabled>13:00</td>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
      </tr>
      <tr>
        <td disabled>14:00</td>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
      </tr>
      <tr>
        <td disabled>15:00</td>
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
        <TimeSlot />
      </tr>
    </TableDragSelect>;
}
