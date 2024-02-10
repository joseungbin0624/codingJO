const notificationService = require('../services/notificationService');

async function sendNotification(req, res) {
  try {
    const notification = await notificationService.createNotification(req.body);
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUserNotifications(req, res) {
  try {
    const notifications = await notificationService.getUserNotifications(req.params.userId);
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function markNotificationAsRead(req, res) {
  try {
    const notification = await notificationService.markNotificationAsRead(req.params.notificationId);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { sendNotification, getUserNotifications, markNotificationAsRead };
