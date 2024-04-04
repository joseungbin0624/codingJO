const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Post = require('../../api/v1/models/Post');
const User = require('../../api/v1/models/User');
const Forum = require('../../api/v1/models/Forum');

describe('Post Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('create & save post successfully', async () => {
    const user = await User.create({ username: 'userTest', email: 'user@test.com', password: 'password123' });
    const forum = await Forum.create({ title: 'Forum Title', content: 'Forum Content', author: user._id });

    const postData = { title: 'Post Title', content: 'Post Content', author: user._id, forum: forum._id };
    const post = new Post(postData);
    const savedPost = await post.save();

    expect(savedPost._id).toBeDefined();
    expect(savedPost.title).toBe('Post Title');
    expect(savedPost.content).toBe('Post Content');
    expect(savedPost.author.toString()).toBe(user._id.toString());
    expect(savedPost.forum.toString()).toBe(forum._id.toString());
  });
});
