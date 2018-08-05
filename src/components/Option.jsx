import React from 'react';

export default function Option(props) {
  // console.log('Option props: ', props)
  return (
    <div>
      Option: {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      > x </button>
    </div>
  );
};
