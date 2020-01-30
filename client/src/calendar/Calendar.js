import React from 'react';
import CodeCopy from './code-copy/CodeCopy.js';
import MySchedule from './MySchedule.js';
import OverlapSchedule from './schedule/OverlapSchedule.js';
import "./Calendar.css"

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabOption : 'mine',
      currentUser : '',
      users : [],
      searchStatus : 'looking'
    }
  }

  selectUser = (user) => {
    this.setState({
      currentUser : user
    })
  }

  getComponent = () => {
    switch (this.state.tabOption) {
      case 'mine':
        return <MySchedule
          users = {this.state.users}
          searchStatus = {this.state.searchStatus}
          schedule={this.props.schedule}
          currentUser={this.state.currentUser}
          handleSubmit={this.selectUser}
          accessCode={this.props.accessCode}
        />
      default:
        return <OverlapSchedule
        users={this.state.users}
        searchStatus={this.state.searchStatus}
        schedule={this.props.schedule}
        accessCode={this.props.accessCode}/>
    }
  };

  switchTab = (tab) => {
    this.setState({
      tabOption : tab
    });
  };

  componentDidMount() {
    const axios = require('axios').default;
    axios.get(`http://localhost:8080/${this.props.accessCode}/users`)
      .then(
        (result) => {
          const users = [];
          if (result !== null && result.data !== null) {
            Object.values(result.data).forEach((user) => {
              users.push(user.name);
            });
          }
          this.setState({
            searchStatus : 'found',
            users : users
          });
        },
        (error) => {
          console.log(error);
          this.setState({ searchStatus : 'not-found' })
        }
      )
  }

  render = () =>
    <div className='calendar'>
      <div className='header'>
        <h1>{this.props.schedule.name}</h1>
        <CodeCopy label='Access Code' code={this.props.accessCode}/>
        <CodeCopy label='URL' code={`overlap.com/${this.props.accessCode}`}/>
      </div>
      <div className='tabs'>
        <button className={ this.state.tabOption === 'mine' ? 'selected' : '' }
          onClick={() => this.switchTab('mine')}>
          My Schedule
        </button>
        <button className={ this.state.tabOption === 'overlap' ? 'selected' : '' }
          onClick={() => this.switchTab('overlap')}>
          Overlap
        </button>
      </div>
      {this.getComponent()}
    </div>;

}
