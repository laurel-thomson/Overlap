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

  componentDidMount() {
    window.addEventListener('beforeunload', this.beforeunload.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.beforeunload.bind(this));
  }

  beforeunload(e) {
    e.preventDefault();
    e.returnValue = true;
  }

  getComponent = () => {
    let component;
    switch(this.state.currentComponent) {
      case 'days':
        component = <SelectDays handleClick={this.moveToHours} eventName={this.props.location.inputValue}/>
        break;
      case 'hours':
        component = <SelectHours handleClick={this.createSchedule} eventName={this.props.location.inputValue}/>
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
        {this.getComponent()}
      </div>
    );
  }
}

export default withRouter(CreateSchedule);
