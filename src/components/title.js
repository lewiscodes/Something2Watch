import React from 'react'

export default (props) => {

  const defaultSyles = {
      fontSize: '16px',
      color: 'blue'
  }

  const style = Object.assign(defaultSyles, props.styles)

  return (
    <h1 style={style} >{props.text}</h1>
  );
}