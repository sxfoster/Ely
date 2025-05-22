import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Instructions</h2>
        <p>Please follow the instructions before proceeding to Vigaro.</p>
        <button onClick={onClose}>Close</button>
        <a href="https://www.vigaro.com" target="_blank" rel="noopener noreferrer">
          Proceed to Vigaro
        </a>
      </div>
    </div>
  );
};

export default Modal;
