import React from 'react';
import './Schedule.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class OverlapSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen : false
    }
  }

  toggleTooltip = () => {
    if (window.innerWidth >= 1024) return;
    this.setState({
      tooltipOpen : !this.state.tooltipOpen
    });
  }

  closeTooltip = () => {
    this.setState({
      tooltipOpen : false
    });
  }

  getTooltip = () => {
    const users = Object.keys(this.props.users);
    if (users.length > 0) {
      return (
        <div className={`tooltip ${this.state.tooltipOpen ? 'open' : ''}`}>
          {Object.keys(this.props.users).map((user) => {
            return (
              <div className={'tooltip-user'} key={user}>
                <div className='icon'>
                 <FontAwesomeIcon icon='user' className='circleIcon' color='white' aria-hidden='true'/>
                </div>
                {user}
              </div>
            );
          })}
          <button aria-label='close' className='close-button' onClick={this.closeTooltip}>
            <FontAwesomeIcon icon='times' color='white' aria-hidden='true' />
          </button>
        </div>
      );
    }
  }

  render() {
    const overlap = Object.keys(this.props.users).length;
    let opacity = (overlap + 1) / (this.props.totalUsers + 1);
    if (this.props.totalUsers === 0) {
      opacity = 0.25;
    }
    return (
      <div className={`timeslot overlap ${overlap > 0 ? 'has-tooltip' : ''}`}>
        <p>{this.props.name}</p>
        <button style={{'backgroundColor' : `rgba(15, 158, 196, ${opacity})`}} onClick={this.toggleTooltip}>
          {overlap} / {this.props.totalUsers}
        </button>
        {this.getTooltip()}
      </div>
    );
  }
}
