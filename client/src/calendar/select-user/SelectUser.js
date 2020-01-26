import React from 'react';
import UserOption from './UserOption';
import './SelectUser.css';

export default class SelectUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser : ''
    }
  }

  selectUser = (user) => {
    this.setState({
      selectedUser : user
    });
  }

  handleClick = () => this.props.handleSubmit(this.state.selectedUser);

  render() {
    const users = ['', 'Laurel','Alex','Emily'];

    return (
      <div className='select-user'>
        <h4>Identify yourself to continue</h4>
        {users.map((user) => <UserOption user={user} selectUser={this.selectUser}/>)}
        <button className={this.state.selectedUser === '' ? 'done' : 'done active'} onClick={this.handleClick}> SUBMIT</button>
      </div>
    );
  }
}
