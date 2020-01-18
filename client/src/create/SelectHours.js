import React from 'react';

export default class SelectHours extends React.Component {
  render() {
    return (
      <div>
        <p>Select Hours</p>
        <button onClick={() => this.props.handleClick('newaccesscode')}>DONE</button>
      </div>
    );
  }
}
