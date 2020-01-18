import React from 'react';

export default class SelectDays extends React.Component {
  render() {
    return (
      <div>
        <p>Select Days</p>
        <button onClick={this.props.handleClick}>NEXT</button>
      </div>
    );
  }
}
