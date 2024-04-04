const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Tutorial = require('../../api/v1/models/Tutorial');
const User = require('../../api/v1/models/User');

describe('Tutorial Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('create & save tutorial successfully', async () => {
    const author = await User.create({ username: 'authorTest', email: 'author@test.com', password: 'password123' });

    const tutorialData = { title: 'Tutorial Title', content: 'Tutorial Content', author: author._id, tags: ['tag1', 'tag2'] };
    const tutorial = new Tutorial(tutorialData);
    const savedTutorial = await tutorial.save();

    expect(savedTutorial._id).toBeDefined();
    expect(savedTutorial.title).toBe('Tutorial Title');
    expect(savedTutorial.content).toBe('Tutorial Content');
    expect(savedTutorial.author.toString()).toBe(author._id.toString());
    expect(savedTutorial.tags).toEqual(expect.arrayContaining(['tag1', 'tag2']));
  });
});
