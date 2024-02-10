 
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notifications/';

// 사용자의 알림 목록 가져오기
const getNotifications = async (userId) => {
  const response = await axios.get(API_URL + `user/${userId}`);
  return response.data;
};

// 알림 읽음 처리
const markAsRead = async (notificationId) => {
  const response = await axios.put(API_URL + `${notificationId}/read`);
  return response.data;
};

// 모든 알림 읽음 처리
const markAllAsRead = async (userId) => {
  const response = await axios.put(API_URL + `user/${userId}/read-all`);
  return response.data;
};

const notificationService = {
  getNotifications,
  markAsRead,
  markAllAsRead,
};

export default notificationService;
