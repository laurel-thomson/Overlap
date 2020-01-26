import React from 'react';
import UserOption from './UserOption';

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
      <div>
        {users.map((user) => <UserOption user={user} selectUser={this.selectUser}/>)}
        <button className='done' onClick={this.handleClick}> SUBMIT</button>
      </div>
    );
  }
}
