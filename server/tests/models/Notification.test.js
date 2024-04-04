const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Notification = require('../../api/v1/models/Notification');
const User = require('../../api/v1/models/User');

describe('Notification Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('create & save notification successfully', async () => {
    const user = await User.create({ username: 'userTest', email: 'user@test.com', password: 'password123' });

    const notificationData = { userId: user._id, type: 'Info', message: 'Notification Message', isRead: false };
    const notification = new Notification(notificationData);
    const savedNotification = await notification.save();

    expect(savedNotification._id).toBeDefined();
    expect(savedNotification.type).toBe('Info');
    expect(savedNotification.message).toBe('Notification Message');
    expect(savedNotification.isRead).toBe(false);
  });
});
