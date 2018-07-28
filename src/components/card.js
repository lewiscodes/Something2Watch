import React from 'react';
import Radium from 'radium';
import LinesEllipsis from 'react-lines-ellipsis';
import styles from '../styles/card';

export default Radium((props) => {
  let year = props.show.Year;

  if (year.length > 5) {
    year = `(${year})`;
  } else {
    year = `(${year}present)`;
  };
  
  return (
    <div style={styles.card} id={`card_${props.show.imdbID}`} onClick={() => {props.handleClick(props.show.imdbID)}} >
      <span style={styles.cardHeader}>
        <h3 style={styles.title}>{props.show.Title}</h3>
        <span style={styles.year}>{year}</span>
        <span style={styles.imdbRating}>{`${props.show.imdbRating}/10`}</span>
      </span>
      <img src={props.show.Poster} style={styles.poster} alt={`${props.show.Title} Poster`}/>
      <div style={styles.extraInfo}>
        <LinesEllipsis text={`Cast: ${props.show.Actors}`} maxLine={2} style={styles.actors} />
        <LinesEllipsis text={`Genre: ${props.show.Genre}`} maxLine={2} style={styles.genre} />
        <div>{`Seasons: ${props.show.totalSeasons}`}</div>
      </div>
    </div>
  );
});