import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import User from './User';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  componentDidMount() {
    // localStorage.setItem('name', 'Andrew');
    // console.log(localStorage);
    // localStorage.getItem('name');
    // localStorage.removeItem('name');
    // console.log(localStorage);
    // localStorage.clear();

    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
      console.log(localStorage);
    }
  }

  componentWillUnmount() {

  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: [],
    }));
  }

  handleDeleteOption(optionToRemove) {
    // console.log('handle delete option', option);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }

  handlePick() {
    let randomOption = this.state.options[
      Math.floor(
        Math.random(this.state.options) * 3
    )];

    alert(randomOption);
  }

  handleAddOption(option) {
    // alert(`added ${option}`)
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
        options: prevState.options.concat([option])
    }));
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

        <User name="Stave" age="32" />

        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />

      </div>
    );
  }
}
