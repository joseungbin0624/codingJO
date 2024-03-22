const mongoose = require('mongoose');
const Post = require('../../api/v1/models/Post');
const User = require('../../api/v1/models/User');
const Forum = require('../../api/v1/models/Forum');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Post 모델', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('포스트 생성 및 저장', async () => {
    const user = await User.create({ username: 'postUser', email: 'post@example.com', password: 'password' });
    const forum = await Forum.create({ title: 'Node.js', content: 'Node.js에 대한 모든 것', author: user._id });

    const post = new Post({
      title: 'Node.js 파일 시스템',
      content: 'Node.js에서 파일 시스템을 다루는 방법에 대해 알아봅시다.',
      author: user._id,
      forum: forum._id
    });

    const savedPost = await post.save();
    expect(savedPost.title).toBe('Node.js 파일 시스템');
    expect(savedPost.content).toContain('다루는 방법에 대해 알아봅시다');
  });
});
