import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class CreateScheduleLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue : event.target.value});
  }

  render() {
    return (
      <div className='homelink create'>
        <div className='form'>
         <label>
           {this.props.label}
           <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
         </label>

         <Link to={{pathname: '/create', inputValue: `${this.state.inputValue}` }}>{this.props.placeholder}</Link>
        </div>
      </div>
    );
  }
}
