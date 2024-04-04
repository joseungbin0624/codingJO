import React from 'react';
import '../styles/NotificationItem.scss';
import bellIcon from '../assets/icons/bell-solid.svg'; // 아이콘 경로 추가

const NotificationItem = ({ notification }) => {
  const formattedDate = new Date(notification.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="notification-item">
      <img src={bellIcon} alt="Notification" className="notification-icon" /> {/* 아이콘 추가 */}
      <p>{notification.message}</p>
      <span>{formattedDate}</span>
    </div>
  );
};

export default NotificationItem;
