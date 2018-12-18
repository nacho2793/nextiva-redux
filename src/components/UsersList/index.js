import React, { Component } from 'react';
import User from '../User';

class UsersList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="users-list">
      <p>List of users:</p>
        {users.map((user, index) => {
          return <User key={user.id} user={user} index={index + 1} />
        })}
      </div>
    );
  }
}

export default UsersList;