import React from 'react';
import { connect } from 'react-redux';
import styles from './Details.module.css';

const Details = ({ pattern }) => {
  console.log('PATTERN:', pattern);

  if (pattern === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.Details}>
      <canvas className={styles.myCanvas}></canvas>

      <h2 className={styles.title}>{pattern.title}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pattern: state.selectedPattern,
  };
};

export default connect(mapStateToProps)(Details);
