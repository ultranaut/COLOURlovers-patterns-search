import React from 'react';
import { connect } from 'react-redux';
import { fetchPatterns } from '../actions';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPatterns();
  }

  render() {
    console.log(this.props.patterns);
    return (
      <div>
        <h2 id="title">Title</h2>
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
