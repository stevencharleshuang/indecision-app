console.log('App.jsx is running');

const appRoot = document.getElementById('app');

let app = {
  title: 'Indecision App',
  subTitle: 'This is a trivial app',
  // options: ['op1', 'op2', 'op3'],
  options: [],
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const randomOption = app.options[randomNum];
  alert(randomOption);
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  };
};

// Babel Compiled Code
const renderApp = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subTitle && app.subTitle}</p>
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option, i) => {
            return <li key={i}>{option}</li>
          })
        }
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
