import api from '../utils/api';

export const getUserNotifications = async (userId) => {
  try {
    const response = await api.get(`/notifications/user/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch notifications: ${error.response?.data?.message || error.message}`);
  }
};
