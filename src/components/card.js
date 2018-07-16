import React from 'react';
import Radium from 'radium';
import LinesEllipsis from 'react-lines-ellipsis'
import styles from '../styles/card';

export default Radium((props) => {
  let year = props.Year;
  if (year.length > 5) {
    year = `(${year})`;
  } else {
    year = `(${year}present)`;
  }

  return (
    <div style={styles.card} id={`card_${props.imdbID}`} >
      <span style={styles.cardHeader}>
        <h3 style={styles.title}>{props.Title}</h3>
        <span style={styles.year}>{year}</span>
        <span style={styles.imdbRating}>{`${props.imdbRating}/10`}</span>
      </span>
      <img src={props.Poster} style={styles.poster} alt={`${props.Title} Poster`}/>
      <div style={styles.extraInfo}>
        <LinesEllipsis text={`Cast: ${props.Actors}`} maxLine={2} style={styles.actors} />
        <LinesEllipsis text={`Genre: ${props.Genre}`} maxLine={2} style={styles.genre} />
        <div>{`Seasons: ${props.totalSeasons}`}</div>
      </div>
    </div>
  );
})