'use strict';

console.log('app.js is running');

// Babel Compiled Code
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'Some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);

// Challenge Code
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Steve $$'
  ),
  React.createElement(
    'p',
    null,
    'Age: 32'
  ),
  React.createElement(
    'p',
    null,
    'Location: NYC'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
