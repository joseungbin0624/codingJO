import React from 'react';
import './Button.scss'; // 버튼 스타일
import { fadeIn } from './animations';

const Button = ({ children, onClick }) => {
  return (
    <button className="btn" onClick={onClick} style={{ animation: fadeIn }}>
      {children}
    </button>
  );
};

export default Button;

