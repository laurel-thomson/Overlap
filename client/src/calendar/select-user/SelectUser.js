import React from 'react';
import UserOption from './UserOption';
import WentWrong from '../../WentWrong';
import './SelectUser.css';

export default class SelectUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUser : '',
      selectedIndex : -1,
      searchStatus : 'looking',
      users : []
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
    switch (this.state.searchStatus) {
      case 'looking':
        return <p>looking...</p>
      case 'found':
        return (
          <div>
            <h4>Identify yourself to continue</h4>
            <div className='options'>
              {this.state.users.map((user, index) =>
                <UserOption
                  user={user}
                  key={index}
                  index={index}
                  selectUser={this.selectUser}
                  selected={index === this.state.selectedIndex}
                />
              )}
            </div>
            <button className={this.state.selectedUser === '' ? 'done' : 'done active'} onClick={this.handleClick}> SUBMIT</button>
          </div>
        );
      case 'not-found':
        return <WentWrong />
    }
  }

  componentDidMount() {
    const axios = require('axios').default;
    axios.get(`http://localhost:8080/${this.props.accessCode}/users`)
      .then(
        (result) => {
          if (result !== null && result.data !== null) {
            const users = [];
            users.push(''); //empty user, for the input where user enters new name
            Object.values(result.data).forEach((user) => {
              users.push(user.name);
            });
            this.setState({
              searchStatus : 'found',
              users : users
            })
          } else {
            this.setState({ searchStatus : 'not-found' });
          }
        },
        (error) => {
          console.log(error);
          this.setState({ searchStatus : 'not-found' })
        }
      )
  }

  render() {
    return (
      <div className='select-user'>
        {this.getUsersComponents()}
      </div>
    );
  }
}
