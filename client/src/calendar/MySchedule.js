import React from 'react';
import SelectUser from './select-user/SelectUser.js';
import SelectSchedule from './schedule/SelectSchedule.js';

export default class MySchedule extends React.Component {
  getComponent = () => {
    if (this.props.currentUser === '') {
      return <SelectUser handleSubmit={this.props.handleSubmit} accessCode={this.props.accessCode}/>;
    } else {
      return <SelectSchedule accessCode={this.props.accessCode}/>;
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
