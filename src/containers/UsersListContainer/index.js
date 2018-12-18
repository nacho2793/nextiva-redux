import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersList from '../../components/UsersList';

class UsersListContainer extends Component {
  render() {
    return <UsersList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  users: state.userReducer.users,
});

export default connect(mapStateToProps)(UsersListContainer);
