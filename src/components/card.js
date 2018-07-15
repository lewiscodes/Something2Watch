import React from 'react';
import Radium from 'radium';
import styles from '../styles/card';

export default Radium((props) => {
  
  // console.log('styles', styles);
  // const style = Object.assign(defaultSyles, props.styles)

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{props.Title}</h3>
      <img src={props.Poster}/>
      <p>{props.Actors}</p>
      <p>{props.Genre}</p>
      <p>{props.Rated}</p>
      <p>{props.Year}</p>
      <p>{props.imdbRating}</p>
      <p>{props.totalSeasons}</p>
    </div>
  );
})