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
      currentUser : ''
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
        return <MySchedule currentUser={this.state.currentUser} handleSubmit={this.selectUser} accessCode={this.props.accessCode}/>
      default:
        return <OverlapSchedule accessCode={this.props.accessCode}/>
    }
  };

  switchTab = (tab) => {
    this.setState({
      tabOption : tab
    });
  };

  render = () =>
    <div className='calendar'>
      <div className='header'>
        <h1>Insert Event Name Here</h1>
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
