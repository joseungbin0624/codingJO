import api from '../utils/api';

const getUserNotifications = async (userId) => {
  const response = await api.get(`/notifications/user/${userId}`);
  return response.data;
};

export const notificationService = {
  getUserNotifications,
};