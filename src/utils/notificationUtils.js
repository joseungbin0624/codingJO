import api from './api';

export const fetchNotifications = async (userId) => {
  try {
    const response = await api.get(`/notifications/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

export const markNotificationAsRead = async (notificationId) => {
  try {
    await api.put(`/notifications/${notificationId}/read`);
  } catch (error) {
    console.error('Error marking notification as read:', error);
    throw error;
  }
};

