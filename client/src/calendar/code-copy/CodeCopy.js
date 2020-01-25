import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CodeCopy.css';

export default class CodeCopy extends React.Component {

  copyCode = (event) => {
    var textField = document.createElement('textarea');
    textField.innerText = this.props.code;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  render() {
    return (
      <div className='code-copy'>
        <div className='label'>{this.props.label}</div>
        <button
          className='clipboard-code'
          aria-label='copy to clipboard'
          onClick={this.copyCode}
        >
          {this.props.code}
          <FontAwesomeIcon icon='clipboard' className='clipboard'/>
        </button>
      </div>
    );
  }
}
