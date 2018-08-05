import React from 'react';
import Option from './Option';

export default function Options(props) {
  // console.log('Options props: ', props);
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option, i) => (
          <Option
            key={ i }
            optionText={ option }
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );
};
