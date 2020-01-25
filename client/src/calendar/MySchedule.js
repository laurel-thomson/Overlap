import React from 'react';
import Day from './schedule/Day.js'
import SelectUser from './select-user/SelectUser.js';
import SelectSchedule from './SelectSchedule.js';

export default class MySchedule extends React.Component {
  getComponent = () => {
    if (this.props.currentUser === '') {
      return <SelectUser selectUser={this.props.selectUser}/>;
    } else {
      return <SelectSchedule />;
    }
  }

  render() {
    return (
      <div className='schedule mine'>
        {this.getComponent()}
      </div>
    );
  }
}
