import React from 'react';
import ReactModal from 'react-modal';

function Modal({ isOpen, onClose }) {
  const customStyles = {
    content: {
      width: '400px',
      height: '300px',
      margin: 'auto',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  };
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Minimal Modal Example"
      style={customStyles}
    >
      <div >
        <h2>Modal Content</h2>
        <p>This is the content inside the modal.</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </ReactModal>
  );
}

export default Modal;
