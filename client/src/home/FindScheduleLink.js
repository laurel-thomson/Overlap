import React from 'react';
import { Link } from 'react-router-dom';

export default class FindScheduleLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {accessCode: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({accessCode : event.target.value});
  }

  render() {
    return (
        <div>
         <label>
           Access Code:
           <input type="text" value={this.state.accessCode} onChange={this.handleChange} />
         </label>

         <Link to={{pathname: '/' + `${this.state.accessCode}` }}>Find Schedule!</Link>
        </div>
    );
  }
}
