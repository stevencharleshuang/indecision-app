import React from 'react';

export default function Option(props) {
  // console.log('Option props: ', props)
  return (
    <div>
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      > x </button>
      &nbsp;
      Option: {props.optionText}
    </div>
  );
};
