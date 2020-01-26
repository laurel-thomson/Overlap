import React from 'react';

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

  getNameElement = () => {
    if (this.props.user === '') {
      return (
        <div className='new-name'>
          <input type='text' placeholder='Enter Name' value={this.state.name} onChange={this.handleChange}/>
        </div>
      );
    } else {
      return <div className='existing-name'>{this.props.user}</div>
    }
  }

  render() {

    return (
      <button className='userOption' onClick={() => this.props.selectUser(this.state.name)}>
        {this.getNameElement()}
      </button>
    );
  }
}
