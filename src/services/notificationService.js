import axios from 'axios';

const API_URL = '/api/v1/notifications';

const getUserNotifications = async (userId) => {
  const response = await axios.get(`${API_URL}/user/${userId}`);
  return response.data;
};

const markNotificationAsRead = async (notificationId) => {
  const response = await axios.patch(`${API_URL}/${notificationId}/read`);
  return response.data;
};

export default { getUserNotifications, markNotificationAsRead };
