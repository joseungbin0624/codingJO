const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Achievement = require('../../api/v1/models/Achievement');
const User = require('../../api/v1/models/User');

describe('Achievement Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('create & save achievement successfully', async () => {
    const userData = { username: 'userTest', email: 'user@test.com', password: 'password123' };
    const user = new User(userData);
    const savedUser = await user.save();

    const achievementData = { title: 'First Achievement', description: 'This is a test achievement', achievedBy: [savedUser._id] };
    const achievement = new Achievement(achievementData);
    const savedAchievement = await achievement.save();

    expect(savedAchievement._id).toBeDefined();
    expect(savedAchievement.title).toBe(achievementData.title);
    expect(savedAchievement.description).toBe(achievementData.description);
    expect(savedAchievement.achievedBy[0].toString()).toBe(savedUser._id.toString());
  });
});
