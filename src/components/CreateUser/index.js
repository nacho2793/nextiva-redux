import React, { Component } from 'react';
import cuid from 'cuid';
import Input from '../Layout/Input';
import './styles.scss';

class CreateUser extends Component {
  state = {
    name: '',
    age: '',
  }

  onTypeHandler = name => event => {
    this.setState({ [name]: event.target.value });
  }

  onCreateHandler = event => {
    event.preventDefault();
    const { name, age } = this.state;
    const user = { id: cuid(), name, age };
    this.props.addUser(user);
    this.setState({ name: '', age: '' })
  }

  render() {
    const { name, age } = this.state;
    return (
      <div className="create-user">
        <form>
          <Input name="nextiva user" value={name} onChange={this.onTypeHandler('name')} key="user-name-input"/>
          <Input name="age" value={age} onChange={this.onTypeHandler('age')} type="number"/>
          <button type="submit" disabled={!name || !age} onClick={this.onCreateHandler}>Create</button>
          <button type="cancel">Cancel</button>
        </form>
      </div>
    )
  }
};

export default CreateUser;
