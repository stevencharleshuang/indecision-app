console.log('app.js is running');

// Babel Compiled Code
let template = React.createElement(
    "h1",
    { id: "some-id" },
    "This is JSX from app.js!"
  );
let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
