import React from 'react'
import TopNav from './nav/TopNav.js'
import Body from './Body.js'
import "./Page.css"

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
