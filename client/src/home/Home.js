import React from 'react';
import HomeLink from './HomeLink.js';
import './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='intro'>
          <p>welcome to <strong>overlap,</strong><br/>
            your group scheduling solution!
          </p>
        </div>
        <HomeLink label='create a schedule' placeholder='Event Name' task='create'/>
        <HomeLink label='find a schedule' placeholder='Access Code' task='find'/>
      </div>
    );
  }
}
