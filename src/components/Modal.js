import React from 'react';
import ReactModal from 'react-modal';
import './Modal.scss';

const Modal = ({ isOpen, onRequestClose, children }) => {
  ReactModal.setAppElement('#root'); // 접근성을 위해 설정

  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="Modal"
      overlayClassName="Overlay"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;

