import React from 'react';
import SelectDays from './SelectDays.js';
import SelectHours from './SelectHours.js';

export default class CreateSchedule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentComponent : 'days'
    };
  }

  getComponent = () => {
    let component;
    switch(this.state.currentComponent) {
      case 'days':
        component = <SelectDays />
        break;
      case 'hours':
        component = <SelectHours />
        break
    }
    return component;
  }

  handleClick = () => {
    this.setState({
      currentComponent : 'hours'
    });
  }

  render() {
    return(
      <div class='create-schedule'>
        <p>{this.props.location.inputValue}</p>
        {this.getComponent()}
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}
