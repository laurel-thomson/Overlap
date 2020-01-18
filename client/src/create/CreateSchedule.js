import React from 'react';
import { withRouter } from "react-router-dom";
import SelectDays from './SelectDays.js';
import SelectHours from './SelectHours.js';

class CreateSchedule extends React.Component {
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
        component = <SelectDays handleClick={this.moveToHours} />
        break;
      case 'hours':
        component = <SelectHours handleClick={this.createSchedule}/>
        break
    }
    return component;
  }

  moveToHours = () => {
    this.setState({
      currentComponent : 'hours'
    });
  }

  createSchedule = (name) => {
    this.props.history.push(`/${name}`);
  }

  render() {
    return(
      <div class='create-schedule'>
        <p>{this.props.location.inputValue}</p>
        {this.getComponent()}
      </div>
    );
  }
}

export default withRouter(CreateSchedule);
