import React from 'react';
import './styles.scss';

const user = props => {
  const { user } = props;
  return (
    <div className="user">
      <span className="user-id">{props.index || user.id}</span>
      <span>{user.name}</span>
      <span>{user.age} years</span>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
};

export default user;
