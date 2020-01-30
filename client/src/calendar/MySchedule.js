import React from 'react';
import SelectUser from './select-user/SelectUser.js';
import SelectSchedule from './schedule/SelectSchedule.js';

export default class MySchedule extends React.Component {
  getComponent = () => {
    if (this.props.currentUser === '') {
      return <SelectUser
        searchStatus={this.props.searchStatus}
        users={this.props.users}
        handleSubmit={this.props.handleSubmit}
        accessCode={this.props.accessCode}/>;
    } else {
      return <SelectSchedule currentUser={this.props.currentUser} schedule={this.props.schedule} accessCode={this.props.accessCode}/>;
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
