import React from 'react';
import { Route, Link } from 'react-router-dom';

export default class CreateScheduleLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {scheduleName: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({scheduleName : event.target.value});
  }

  render() {
    return (
        <div>
         <label>
           Schedule Name:
           <input type="text" scheduleName={this.state.scheduleName} onChange={this.handleChange} />
         </label>

         <Link to={{pathname: '/create', scheduleName: `${this.state.scheduleName}` }}>Create Schedule!</Link>
        </div>
    );
  }
}
