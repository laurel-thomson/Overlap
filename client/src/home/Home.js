import React from 'react'
import CreateScheduleLink from './CreateScheduleLink.js'
import FindScheduleLink from './FindScheduleLink.js'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='intro'>welcome to overlap</div>
        <CreateScheduleLink />
        <FindScheduleLink />
      </div>
    );
  }
}
