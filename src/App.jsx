const obj = {
  name: 'Matsui',
  getName() {
    return this.name;
  }
};

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  handlePick() {
    let randomOption = this.state.options[
      Math.floor(
        Math.random(this.state.options) * 3
    )];

    alert(randomOption);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    });
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option, i) => <Option key={ i } optionText={ option } />)
        }
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
    }
    this.localHandleAddOption = this.localHandleAddOption.bind(this)
  }
  localHandleAddOption (e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error,
      };
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.localHandleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option: {this.props.optionText}
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
