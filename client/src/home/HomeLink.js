import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <div className={`homelink ${this.props.task}`}>
        <h4>{this.props.task} a schedule</h4>
        <div className='form'>
          <div className='icon'>
           <FontAwesomeIcon icon={this.props.icon} className='circleIcon' color='white'/>
          </div>
          <input type='text' value={this.state.inputValue} placeholder={this.props.placeholder} onChange={this.handleChange} />
          <Link to={{pathname: '/create', inputValue: `${this.state.inputValue}` }}>
            <FontAwesomeIcon icon='angle-right' className='arrow'/>
          </Link>
        </div>
      </div>
    );
  }
}
