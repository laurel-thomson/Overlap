import React from 'react'
import { Link } from 'react-router-dom';

export default class CreateScheduleLink extends React.Component {
  render() {
    return (
      <Link to="/create">Create Schedule!</Link>
    );
  }
}
