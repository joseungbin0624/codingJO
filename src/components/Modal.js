// src/components/Modal.js
import React from 'react';
import '../styles/Modal.scss';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} data-testid="modal-overlay"> {/* 수정: data-testid 추가 */}
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
