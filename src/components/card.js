import React from 'react'

export default (props) => {
  const defaultSyles = {
      fontSize: '16px',
      color: 'blue'
  }

  const style = Object.assign(defaultSyles, props.styles)

  return (
    <div>
      <h3>{props.Title}</h3>
      <img src={props.Poster}/>
      <p>{props.Actors}</p>
      <p>{props.Genre}</p>
      <p>{props.Rated}</p>
      <p>{props.Year}</p>
      <p>{props.imdbRating}</p>
      <p>{props.totalSeasons}</p>
    </div>
  );
}