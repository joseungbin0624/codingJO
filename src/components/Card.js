import React from 'react';
import './Card.scss'; // 스타일 임포트
import { useSpring, animated } from 'react-spring'; // 애니메이션 라이브러리

const Card = ({ title, content, imageUrl }) => {
  const animProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="card" style={animProps}>
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </animated.div>
  );
};

export default Card;

