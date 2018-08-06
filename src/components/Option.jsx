import React from 'react';

export default function Option(props) {
  // console.log('Option props: ', props)
  return (
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
      &nbsp;
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      > x </button>
    </div>
  );
};
