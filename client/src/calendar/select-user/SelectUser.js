import React from 'react';
import UserOption from './UserOption';
import './SelectUser.css';

export default class SelectUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser : '',
      selectedIndex: -1
    }
  }

  selectUser = (user, index) => {
    this.setState({
      selectedUser : user,
      selectedIndex : index
    });
  }

  handleClick = () => this.props.handleSubmit(this.state.selectedUser);

  render() {
    const users = ['', 'Laurel','Alex','Emily'];

    return (
      <div className='select-user'>
        <h4>Identify yourself to continue</h4>
        <div className='options'>
          {users.map((user, index) =>
            <UserOption user={user} index={index} selectUser={this.selectUser} selected={index === this.state.selectedIndex}/>
          )}
        </div>
        <button className={this.state.selectedUser === '' ? 'done' : 'done active'} onClick={this.handleClick}> SUBMIT</button>
      </div>
    );
  }
}
