const Notification = require('../models/Notification');

// 알림 생성
async function createNotification(notificationData) {
  const notification = new Notification(notificationData);
  await notification.save();
  return notification;
}

// 사용자 알림 검색
async function getUserNotifications(userId) {
  // 'userId' 필드 사용으로 수정
  return await Notification.find({ userId: userId });
}

// 알림을 읽음으로 표시
async function markNotificationAsRead(notificationId) {
  // 'isRead' 필드를 'true'로 업데이트
  const notification = await Notification.findByIdAndUpdate(notificationId, { isRead: true }, { new: true });
  if (!notification) {
    throw new Error('Notification not found');
  }
  return notification;
}

module.exports = {
  createNotification,
  getUserNotifications,
  markNotificationAsRead,
};
