import React from 'react'
import CreateSchedule from './CreateSchedule.js'
import FindSchedule from './FindSchedule.js'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='intro'>welcome to overlap</div>
        <CreateSchedule />
        <FindSchedule />
      </div>
    );
  }
}
