import React from 'react';
import '../styles/AchievementItem.scss';

const AchievementItem = ({ achievement }) => {
  return (
    <div className={`achievement-item ${achievement.achieved ? 'achieved' : ''}`}>
      {achievement.icon && <img src={achievement.icon} alt={achievement.title} className="achievement-icon" />}
      <div className="achievement-info">
        <h3 className="achievement-title">{achievement.title}</h3>
        <p className="achievement-description">{achievement.description}</p>
      </div>
      {achievement.achieved && <span className="achievement-badge">Achieved</span>}
    </div>
  );
};

export default AchievementItem;
