import React from 'react'
import { Link } from 'react-router-dom';
import './TopNav.css'

export default class TopNav extends React.Component {
  render() {
    return (
      <div className='topnav'>
        <Link to='/'>
          <img src={require("../images/logo.svg")}/>
        </Link>
      </div>
    );
  }
}
