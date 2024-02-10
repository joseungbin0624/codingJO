import React from 'react';
import './AchievementItem.scss';
import { fadeIn } from './animations';

const AchievementItem = ({ title, description }) => {
  return (
    <div className="achievement-item" style={{ animation: fadeIn }}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default AchievementItem;

