import React from 'react';
import './styles.scss';

const User = props => {
  const { user } = props;
  return (
    <div className="user">
      <span className="user-id">{props.index || user.id}</span>
      <span className="user-name">{user.name}</span>
      <span className="user-age">{user.age} years</span>
      <button>Update</button>
      <button onClick={props.onDeleteHandler(user.id)}>Delete</button>
    </div>
  );
};

export default User;
