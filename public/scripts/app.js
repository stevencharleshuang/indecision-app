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

var user = {
  name: 'Steve $$',
  age: 32,
  location: 'New York'
};

var getLocation = function getLocation(location) {
  return location ? React.createElement(
    'p',
    null,
    'Location: ',
    location
  ) : undefined;
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name.toUpperCase() : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
