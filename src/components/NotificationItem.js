import React from 'react';
import '../styles/NotificationItem.scss';

const NotificationItem = ({ notification }) => {
  // 날짜 형식을 사용자 친화적으로 변경
  const formattedDate = new Date(notification.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="notification-item">
      <p>{notification.message}</p>
      {/* 날짜 형식 변경 반영 */}
      <span>{formattedDate}</span>
    </div>
  );
};

export default NotificationItem;
