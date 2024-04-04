const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Notification = require('../../api/v1/models/Notification');
const notificationService = require('../../api/v1/services/notificationService');
const User = require('../../api/v1/models/User');

describe('Notification Service Tests', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  beforeEach(async () => {
    await Notification.deleteMany({});
    await User.deleteMany({});
  });

  it('should create a new notification', async () => {
    const user = await User.create({
      username: 'notificationUser',
      email: 'notification@example.com',
      password: 'password',
    });

    const notificationData = {
      userId: user._id,
      message: 'This is a test notification',
      type: 'Info',
    };

    const notification = await notificationService.createNotification(notificationData);
    expect(notification).toHaveProperty('_id');
    expect(notification.message).toBe(notificationData.message);
    expect(notification.type).toBe(notificationData.type);
    expect(notification.userId.toString()).toBe(user._id.toString());
  });

  it('should retrieve all notifications for a user', async () => {
    const user = await User.create({
      username: 'notificationUser2',
      email: 'notification2@example.com',
      password: 'password',
    });

    await notificationService.createNotification({
      userId: user._id,
      message: 'First test notification',
      type: 'Info',
    });

    await notificationService.createNotification({
      userId: user._id,
      message: 'Second test notification',
      type: 'Alert',
    });

    const notifications = await notificationService.getUserNotifications(user._id);
    expect(notifications.length).toBe(2);
    expect(notifications[0].userId.toString()).toBe(user._id.toString());
    expect(notifications[1].userId.toString()).toBe(user._id.toString());
  });
});
