import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { setSearchField, requestRobots } from '../actions/actions';
import MainPage from '../components/MainPage';

class App extends Component {
  render() {
    return(
      <MainPage {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);