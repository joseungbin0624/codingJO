// 알림 관련 유틸리티
import { getUserNotifications, markNotificationAsRead } from '../../server/api/v1/services/notificationService';

// 사용자 알림 조회 함수
export const fetchUserNotifications = async (userId) => {
  return await getUserNotifications(userId);
};

// 알림 읽음 처리 함수
export const readNotification = async (notificationId) => {
  return await markNotificationAsRead(notificationId);
};
