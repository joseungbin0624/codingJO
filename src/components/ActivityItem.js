// E:\project\codingJO\src\components\ActivityItem.js
import React from 'react';

const ActivityItem = ({ activity }) => {
  return (
    <div className="activity-item">
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
    </div>
  );
};

export default ActivityItem;
