import React from 'react';
import CodeCopy from './CodeCopy.js';
import TableDragSelect from "react-table-drag-select";
import "react-table-drag-select/style.css";
import "./Calendar.css"

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    let cells = [];
    for (let i = 0; i < 8; i++) {
      cells.push(Array(8).fill(false));
    }

    this.state = {
      cells: cells
    };
  }

  render = () =>
    <div className='calendar'>
      <div className='header'>
        <h1>Insert Event Name Here</h1>
        <CodeCopy label='Access Code' code={this.props.match.params.id}/>
        <CodeCopy label='URL' code={`overlap.com/${this.props.match.params.id}`}/>
      </div>
      <TableDragSelect value={this.state.cells} onChange={this.handleChange}>
        <tr>
          <td disabled />
          <td disabled>Sunday</td>
          <td disabled>Monday</td>
          <td disabled>Tuesday</td>
          <td disabled>Wednesday</td>
          <td disabled>Thursday</td>
          <td disabled>Friday</td>
          <td disabled>Saturday</td>
        </tr>
        <tr>
          <td disabled>10:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td disabled>11:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td disabled>12:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td disabled>13:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td disabled>14:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td disabled>15:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td disabled>16:00</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
      </TableDragSelect>
    </div>;

  handleChange = (cells) => {
    this.setState({ cells: cells })
    //TODO: update the database with the cells that have changed
  }
}
