import React from 'react';
import styles from './Details.module.css';

const Details = (pattern) => {
  return (
    <div className={styles.Details}>
      <canvas className={styles.myCanvas}></canvas>

      <h2 className={styles.title}>Title</h2>
    </div>
  );
};

export default Details;
