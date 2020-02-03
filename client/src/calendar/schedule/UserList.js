import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './UserList.css'

export default function UserList(props) {
  return (
    <div className='user-list'>
      {props.users.map((user) => {
        return (
          <div className='user' key={user}>
            <div className='icon'>
             <FontAwesomeIcon icon='user' className='circleIcon' color='white' aria-hidden='true'/>
            </div>
            {user}
          </div>
        );
      })}
    </div>
  );
}
