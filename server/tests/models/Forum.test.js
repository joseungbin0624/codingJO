const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Forum = require('../../api/v1/models/Forum');
const User = require('../../api/v1/models/User');

describe('Forum Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('create & save forum successfully', async () => {
    const user = await User.create({ username: 'userTest', email: 'user@test.com', password: 'password123' });

    const forumData = { title: 'Forum Title', content: 'Forum Content', author: user._id };
    const forum = new Forum(forumData);
    const savedForum = await forum.save();

    expect(savedForum._id).toBeDefined();
    expect(savedForum.title).toBe('Forum Title');
    expect(savedForum.content).toBe('Forum Content');
  });
});
