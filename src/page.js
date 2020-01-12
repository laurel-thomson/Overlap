import React from 'react'
import TopNav from './topnav.js'
import Body from './body.js'
import "./page.css"

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <Body />
      </div>
    );
  }
}
