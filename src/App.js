import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CreateUserContainer from './containers/CreateUserContainer';
import UserListContainer from './containers/UsersListContainer';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <CreateUserContainer />
          <UserListContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);