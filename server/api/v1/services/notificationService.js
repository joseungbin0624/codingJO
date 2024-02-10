const Notification = require('../models/Notification');

async function createNotification(notificationData) {
  const notification = new Notification(notificationData);
  await notification.save();
  return notification;
}

async function getUserNotifications(userId) {
  return await Notification.find({ recipient: userId });
}

async function markNotificationAsRead(notificationId) {
  const notification = await Notification.findByIdAndUpdate(notificationId, { read: true }, { new: true });
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
