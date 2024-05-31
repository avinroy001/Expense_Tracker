// DispExp.js
import React, { useState } from 'react';
// Adjust the import path as needed
import Modal from './Modal';

const DispExp = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="walletWrapper">
      <p>Expanse : ₹3000</p>
      <div>
        <button className="btn2" onClick={handleOpenModal}>+ Add Income</button>
      </div>
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default DispExp;
