const mongoose = require('mongoose');
const Notification = require('../../api/v1/models/Notification');
const User = require('../../api/v1/models/User');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Notification 모델', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('알림 생성 및 저장', async () => {
    const user = await User.create({ username: 'notifyUser', email: 'notify@example.com', password: 'password' });
    const notification = new Notification({
      userId: user._id,
      type: 'Info',
      message: '새로운 코스가 추가되었습니다.',
      isRead: false
    });

    const savedNotification = await notification.save();
    expect(savedNotification.message).toBe('새로운 코스가 추가되었습니다.');
    expect(savedNotification.type).toBe('Info');
    expect(savedNotification.isRead).toBeFalsy();
  });
});

