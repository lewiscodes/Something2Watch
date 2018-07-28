import React from 'react';
import Radium from 'radium';
import { Link } from 'react-router';
import styles from '../styles/title';

export default Radium((props) => {
  if (props.header) {
    return (
      <Link to={'/'}><h1 style={styles.title.header} className={"falseNineFont"}>{props.text}</h1></Link>
    );
  };

  return (
    <h2 style={styles.title.standard} >{props.text}</h2>
  );
});