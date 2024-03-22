import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TutorialCard.scss'; // 가정한 스타일시트 경로

const TutorialCard = ({ tutorial }) => {
  return (
    <div className="tutorial-card">
      <img src={tutorial.thumbnail} alt={tutorial.title} />
      <div className="tutorial-info">
        <h3>{tutorial.title}</h3>
        <p>{tutorial.description}</p>
        <Link to={`/tutorials/${tutorial.id}`}>자세히 보기</Link>
      </div>
    </div>
  );
};

export default TutorialCard;
