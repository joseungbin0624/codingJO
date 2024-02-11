import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Card.scss';

const Card = ({ title, description, imageUrl }) => {
  const animationProps = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <animated.div style={animationProps} className="card">
      <img src={imageUrl} alt="" className="card-image" />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </animated.div>
  );
};

export default Card;
