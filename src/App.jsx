console.log('app.js is running');

// Babel Compiled Code
const template = (
  <div>
    <h1>Indecision App</h1>
    <p>Some info</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

// Challenge Code
const templateTwo = (
  <div>
    <h1>Steve $$</h1>
    <p>Age: 32</p>
    <p>Location: NYC</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
