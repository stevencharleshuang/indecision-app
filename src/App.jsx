console.log('App.jsx is running');

// Challenge Code
let app = {
  title: 'Indecision App',
  subTitle: 'This is a trivial app',
  options: ['One', 'Two'],
}

// Babel Compiled Code
const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle && app.subTitle}</p>
    {app.options.length > 0 ? 'Here are your options' : 'No options'}
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

const getLocation = (location) => location ? <p>Location: {location}</p> : undefined

const templateTwo = (
  <div>
    <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1>
    {(user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
