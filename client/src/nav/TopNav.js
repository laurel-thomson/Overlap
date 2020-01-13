import React from 'react'
import './TopNav.css'

export default class TopNav extends React.Component {
  render() {
    return (
      <div className='topnav'>
        <img src={require("../images/logo.svg")}/>,
      </div>
    );
  }
}
