import React from 'react';
import { connect } from 'react-redux';
import { fetchPatterns } from '../actions';
import styles from './App.module.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPatterns();
  }

  render() {
    console.log(this.props.patterns);
    return (
      <div className={styles.App}>
        <form className={styles.search}>
          <label>Pattern keyword(s): </label>
          <input type="text" id="searchTerm" value="begin" />
          <input type="submit" value="search" />
        </form>
        <canvas className={styles.myCanvas}></canvas>

        <h2 className={styles.title}>Title</h2>
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
