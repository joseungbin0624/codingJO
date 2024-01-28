import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ text, onClick, className, variant = "primary" }) => {
  return (
    <Button className={className} onClick={onClick} variant={variant}>
      {text}
    </Button>
  );
};

export default CustomButton;
