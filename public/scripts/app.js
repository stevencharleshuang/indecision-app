'use strict';

console.log('App.jsx is running');

// Challenge Code
var app = {
  title: 'Indecision App',
  subTitle: 'This is a trivial app',
  options: ['One', 'Two']

  // Babel Compiled Code
};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subTitle && app.subTitle
  ),
  app.options.length > 0 ? 'Here are your options' : 'No options',
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

var count = 0;

var addOne = function addOne() {};

var minusOne = function minusOne() {};

var reset = function reset() {};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'Reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
