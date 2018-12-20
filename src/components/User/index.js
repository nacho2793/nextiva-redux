import React, { Component } from 'react';
import './styles.scss';

class User extends Component {
  state = {
    userName: this.props.user.name,
    userAge: this.props.user.age,
    updating: false,
  }

  toggleUpdateState = () => {
    const { updating } = this.state;
    this.setState({ updating: !updating });
  }

  typeHandler = name => event => {
    console.log(event);
    this.setState({ [name]: event.target.value });
  }

  saveChanges = () => {
    /*
      REDUX IMPLEMENTATION
    */
    this.toggleUpdateState();
  }

  displayUserInfo = (user) => ([
    <span className="user-name">{user.name}</span>,
    <span className="user-age">{user.age} years</span>,
    <button onClick={this.toggleUpdateState}>Update</button>,
    <button onClick={this.props.onDeleteHandler(user.id)}>Delete</button>,
  ]);

  displayEditForm = () => ([
    <input value={this.state.userName} onChange={this.typeHandler('userName')}/>,
    <input value={this.state.userAge} onChange={this.typeHandler('userAge')} />,
    <button onClick={this.saveChanges}>Save</button>,
    <button onClick={this.toggleUpdateState}>Cancel</button>,
  ]);

  render() {
    const { user } = this.props;
    return (
      <div className="user">
        <span className="user-id">{this.props.index || user.id}</span>
        {this.state.updating ? this.displayEditForm() : this.displayUserInfo(user)}
      </div>
    );
  }
};

export default User;
