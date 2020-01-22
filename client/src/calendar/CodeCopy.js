import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CodeCopy.css';

export default function CodeCopy(props) {
  return (
    <div className='code-copy'>
      <div className='label'>{props.label}</div>
      <button
        className='clipboard-code'
        aria-label='copy to clipboard'
      >
        {props.code}
        <FontAwesomeIcon icon='clipboard' className='clipboard'/>
      </button>
    </div>
  );
}
