console.log('App.jsx is running');

// Challenge Code
let app = {
  title: 'Indecision App',
  subTitle: 'This is a trivial app'
}

// Babel Compiled Code
const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

let user = {
  name : 'Steve $$',
  age : 32,
  location : 'New York'
}
const templateTwo = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
