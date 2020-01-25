import React from 'react';

export default class SelectUser extends React.Component {
  render() {
    const users = ['Laurel','Alex','Emily'];

    return (
      <div>
        {users.map((user) => <p>{user}</p>)}
      </div>
    );
  }
}
