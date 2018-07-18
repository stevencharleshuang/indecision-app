'use strict';

console.log('app.js is running');

// Babel Compiled Code
var template = React.createElement(
  'h1',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
