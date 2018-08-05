// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const App = () => {
  return(
    <IndecisionApp />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
