import React from 'react'

export default (props) => {
  return (
    <input
      type={"text"}
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
      placeholder={props.placeholder}
    />
  );
}