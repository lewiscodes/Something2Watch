import React from 'react';
import Radium from 'radium';
import styles from '../styles/title';

export default Radium((props) => {
  if (props.header) {
    return (
      <h1 style={styles.title.header} className={"falseNineFont"}>{props.text}</h1>
    );
  };

  return (
    <h2 style={styles.title.standard} >{props.text}</h2>
  );
});