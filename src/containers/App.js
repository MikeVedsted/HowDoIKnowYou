import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestUsers } from '../actions';
import CardList from '../components/Cardlist'; 
import SearchBox from '../components/SearchBox';  
import Loader from '../components/Loader';  
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
      return user.name.toLowerCase().includes(searchField.toLowerCase()) || user.position.toLowerCase().includes(searchField.toLowerCase()) | user.email.toLowerCase().includes(searchField.toLowerCase()) ;
    })
    return isPending  ?
      <Loader/> : 
      (
      <div className="tc">
       <header className="bg-navy fixed w-100 pv3 pv4-ns">
        <nav className="f6 fw6">
          <h1 className="f1 mv2">Look up colleagues</h1>
          <p className="dark-green">Search by name, position or email</p>
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
console.log(process.env)
export default connect(mapStateToProps, mapDispatchToProps)(App)