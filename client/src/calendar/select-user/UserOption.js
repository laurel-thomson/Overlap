import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserOption.css';

export default class UserOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : this.props.user
    };
  }

  handleChange = (event) => {
    this.setState({
      name : event.target.value
    });
  };

  isNewUser = () => {
    return this.props.user === '';
  }

  getNameElement = () => {
    if (this.isNewUser()) {
      return (
        <div className='new-name'>
          <input type='text' placeholder='Enter Name' value={this.state.name} onChange={this.handleChange}/>
        </div>
      );
    } else {
      return <div className='existing-name'>{this.props.user}</div>
    }
  }

  getIcon = () => {
    if (this.isNewUser()) {
      return 'user-plus';
    } else {
      return 'user';
    }
  }

  render() {
    return (
      <button className={this.isNewUser() ? 'user-option new' : 'user-option existing'} 
        onClick={() => this.props.selectUser(this.state.name)}>
        <div className='icon'>
         <FontAwesomeIcon icon={this.getIcon()} className='circleIcon' color='white'/>
        </div>
        {this.getNameElement()}
      </button>
    );
  }
}
