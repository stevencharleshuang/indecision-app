console.log('App.jsx is running');

const appRoot = document.getElementById('app');

let app = {
  title: 'Indecision App',
  subTitle: 'This is a trivial app',
  options: [],
}

const onRemoveAll = () => {
  app.options = [];
  renderApp();
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
}

// Babel Compiled Code
const renderApp = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subTitle && app.subTitle}</p>
      {app.options.length > 0 ? 'Here are your options' : 'No options'}
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        <li>Item 1</li>
        <li>Item 2</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

renderApp();
