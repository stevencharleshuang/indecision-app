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
  count += 1;
  renderCounterApp();
}

const minusOne = () => {
  count -= 1;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
