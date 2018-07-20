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

let count = 0;

const addOne = () => {

}

const minusOne = () => {

}

const reset = () => {

}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
