import React from 'react';
import { useSpring, animated } from 'react-spring';
import './TutorialCard.scss';

const TutorialCard = ({ tutorial }) => {
  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 });

  return (
    <animated.div style={fade} className="tutorial-card">
      <div className="tutorial-image" style={{ backgroundImage: `url(${tutorial.imageUrl})` }} />
      <div className="tutorial-content">
        <h3>{tutorial.title}</h3>
        <p>{tutorial.description}</p>
      </div>
    </animated.div>
  );
};

export default TutorialCard;

