import React from 'react';
import Modal from 'react-modal';

export default function OptionModal(props) {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.handleClearModal}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearModal}>Okay</button>
    </Modal>
  );
}
