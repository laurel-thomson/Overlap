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
        <HomeLink task='create' icon='plus' placeholder='Event Name' task='create'/>
        <HomeLink task='find' icon='key' placeholder='Access Code' task='find'/>
      </div>
    );
  }
}
