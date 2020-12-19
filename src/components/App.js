import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPatterns, setSelectedPattern } from '../actions';
import Details from './Details';
import SearchBar from './SearchBar';
import styles from './App.module.css';

const App = ({ patterns, fetchPatterns, setSelectedPattern }) => {
  useEffect(() => {
    fetchPatterns();
  }, [fetchPatterns]);

  // whenever a new pattern set is loaded, reset selectedPattern
  useEffect(() => {
    setSelectedPattern(patterns[0]);
  }, [patterns, setSelectedPattern]);

  return (
    <div className={styles.App}>
      <SearchBar />
      <Details />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    patterns: state.patterns,
  };
};

export default connect(mapStateToProps, { fetchPatterns, setSelectedPattern })(
  App
);
