// NotificationPage.js
import React, { useEffect, useState } from 'react';
import NotificationItem from '../components/NotificationItem';
import { getUserNotifications } from '../services/notificationService';
import '../styles/NotificationPage.scss';
import { Link } from 'react-router-dom';

// 추가된 아이콘
import bellIcon from '../assets/icons/bell-solid.svg';

function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const data = await getUserNotifications();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    }
    fetchNotifications();
  }, []);

  return (
    <div className="notification-page">
      <img src={bellIcon} alt="Notifications" className="notifications-icon"/>
      <h1>Your Notifications</h1>
      <div className="notification-list">
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <NotificationItem key={notification.id} notification={notification} />
          ))
        ) : (
          <p>No notifications yet.</p>
        )}
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotificationPage;
