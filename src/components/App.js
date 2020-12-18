import React from 'react';
import { connect } from 'react-redux';
import { fetchPatterns } from '../actions';
import Details from './Details';
import SearchBar from './SearchBar';
import styles from './App.module.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPatterns();
  }

  render() {
    console.log(this.props.patterns);
    return (
      <div className={styles.App}>
        <SearchBar />
        <Details />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patterns: state.patterns,
  };
};

export default connect(mapStateToProps, { fetchPatterns })(App);
