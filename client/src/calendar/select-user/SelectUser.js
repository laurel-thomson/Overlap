import React from 'react';
import UserOption from './UserOption';
import WentWrong from '../../WentWrong';
import './SelectUser.css';

export default class SelectUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser : '',
      selectedIndex : -1
    }
  }

  selectUser = (user, index) => {
    this.setState({
      selectedUser : user,
      selectedIndex : index
    });
  }

  handleClick = () => this.props.handleSubmit(this.state.selectedUser);

  getUsersComponents = () => {
    switch (this.props.searchStatus) {
      case 'looking':
        return <p>looking...</p>
      case 'found':
        return (
          <div>
            <h4>Identify yourself to continue</h4>
            <div className='options'>
              <UserOption
                user={""}
                index={0}
                selectUser={this.selectUser}
                selected={0 === this.state.selectedIndex}
              />
              {this.props.users.map((user, index) =>
                <UserOption
                  user={user}
                  key={index+1}
                  index={index+1}
                  selectUser={this.selectUser}
                  selected={index+1 === this.state.selectedIndex}
                />
              )}
            </div>
            <button disabled={this.state.selectedUser === ''} className={this.state.selectedUser === '' ? 'done' : 'done active'} onClick={this.handleClick}> SUBMIT</button>
          </div>
        );
      default:
        return <WentWrong />
    }
  }

  render() {
    return (
      <div className='select-user'>
        {this.getUsersComponents()}
      </div>
    );
  }
}
