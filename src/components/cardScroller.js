import React from 'react';
import Radium from 'radium';
import styles from '../styles/cardScroller';

export default Radium((props) => {
  return (
    <div style={styles.cardScroller}>
      {props.children}
    </div>
  );
})