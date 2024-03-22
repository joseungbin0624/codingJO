import React, { useEffect, useState } from 'react';
import NotificationItem from '../components/NotificationItem';
import { getUserNotifications } from '../services/notificationService';
import '../styles/NotificationPage.scss';
import { Link } from 'react-router-dom';

function NotificationPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function fetchNotifications() {
      try {
        const data = await getUserNotifications(); // 수정: 함수 사용 변경
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    }
    fetchNotifications();
  }, []);

  return (
    <div className="notification-page">
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
