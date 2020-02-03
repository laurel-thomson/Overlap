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
    const colors = ['red', 'blue', 'darkgray'];
    const color = colors[this.props.totalUsers.indexOf()]
    if (users.length > 0) {
      return (
        <div className={`tooltip ${this.state.tooltipOpen ? 'open' : ''}`}>
          {Object.keys(this.props.users).map((user) => {
            return (
              <div className='tooltip-user' key={user}>
                <div className={`icon ${colors[this.props.totalUsers.indexOf(user) % 3]}`}>
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
    const totalCount = this.props.totalUsers.length;
    let opacity = (overlap + 1) / (totalCount + 1);
    if (totalCount === 0) {
      opacity = 0.25;
    }
    return (
      <div className={`timeslot overlap ${overlap > 0 ? 'has-tooltip' : ''}`}>
        <p>{this.props.name}</p>
        <button style={{'backgroundColor' : `rgba(15, 158, 196, ${opacity})`}} onClick={this.toggleTooltip}>
          {overlap} / {totalCount}
        </button>
        {this.getTooltip()}
      </div>
    );
  }
}
