import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/Button.scss'; // Ensure styles align with the guide

const Button = ({ text, onClick }) => {
  const animationProps = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(-20px)' },
    reset: true,
  });

  return (
    <animated.button style={animationProps} className="button" onClick={onClick}>
      {text}
    </animated.button>
  );
};

export default Button;
