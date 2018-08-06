import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  }

  localHandleAddOption = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({
        error: error,
    }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        <form className="add-option" onSubmit={this.localHandleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
      </div>
    );
  }
}
