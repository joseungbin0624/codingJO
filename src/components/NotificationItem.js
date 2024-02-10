import React from 'react';
import moment from 'moment';
import './NotificationItem.scss';

const NotificationItem = ({ notification }) => {
  return (
    <div className="notification-item">
      <p>{notification.message}</p>
      <span>{moment(notification.date).fromNow()}</span>
    </div>
  );
};

export default NotificationItem;

