import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersList from '../../components/UsersList';
import { deleteUser } from '../../actions/users';

class UsersListContainer extends Component {
  render() {
    return <UsersList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = dispatch => ({
  deleteUser: userId => dispatch(deleteUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
