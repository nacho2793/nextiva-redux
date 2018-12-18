import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateUser from '../../components/CreateUser';
import { addUser } from '../../actions/users';

class CreateUserContainer extends Component {
  render() {
    return <CreateUser {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: user => dispatch(addUser(user))
  }
};

export default connect(null, mapDispatchToProps)(CreateUserContainer);
