import React from 'react';
import NotFound from './NotFound.js';
import Calendar from './Calendar.js';

export default class FindSchedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessCode : this.props.match.params.id,
      searchStatus : 'looking',
      schedule : {}
    }
  }

  getComponent = () => {
    switch(this.state.searchStatus) {
      case 'looking':
        return <p>Looking for schedule...</p>
      case 'found':
        return <Calendar accessCode={this.state.accessCode} schedule={this.state.schedule}/>
      default:
        return <NotFound />
    }
  };

  componentDidMount() {
    const axios = require('axios').default;
    axios.get(`http://localhost:8080/${this.state.accessCode}`)
      .then(
        (result) => {
          if (result !== null && result.data !== null) {
            this.setState({
              searchStatus : 'found',
              schedule : result.data
            });
          } else {
            this.setState({ searchStatus : 'not-found' })
          }
        },
        (error) => {
          console.log(error);
          this.setState({ searchStatus : 'not-found' })
        }
      )
  }

  render () {
    return (
      <div>
        {this.getComponent()}
      </div>
    );
  }
}
