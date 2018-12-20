import React, { Component } from 'react';
import User from '../User';

class UsersList extends Component {
  onDeleteHandler = userId => () => {
    this.props.deleteUser(userId);
  };

  render() {
    const { users } = this.props;
    return (
      <div className="users-list">
      <p>List of users:</p>
        {users.map((user, index) => {
          return (
            <User
              key={user.id}
              user={user}
              index={index + 1}
              onDeleteHandler={this.onDeleteHandler}
            />
          );
        })}
      </div>
    );
  }
}

export default UsersList;