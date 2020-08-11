import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestUsers } from '../actions';
import CardList from '../components/Cardlist'; 
import SearchBox from '../components/SearchBox';  
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchUsers.searchField,
    users: state.requestUsers.users,
    isPending: state.requestUsers.isPending,
    error: state.requestUsers.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestUsers: () => dispatch(requestUsers())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestUsers();
  }

  render() {
    const { users, searchField, onSearchChange, isPending } = this.props;
    const filteredUsers  = users.filter(user => {
      return user.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending  ?
      <h1 className="tc">Loading</h1> : 
      (
      <div className="tc">
       <header className="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6">
          <h1 className="f1">Find your colleague!</h1>
          < SearchBox searchChange={onSearchChange}/>
        </nav>
      </header>    
          <ErrorBoundry>
            < CardList users={filteredUsers} />
          </ErrorBoundry>
      </div>
      );
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(App)