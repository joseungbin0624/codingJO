const mongoose = require('mongoose');
const Forum = require('../../api/v1/models/Forum');
const User = require('../../api/v1/models/User');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Forum 모델', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('포럼 생성 및 답글 추가', async () => {
    const user = await User.create({ username: 'forumUser', email: 'forum@example.com', password: 'forum' });

    const forum = new Forum({
      title: 'Node.js 질문',
      content: 'Node.js에서 파일을 어떻게 다루나요?',
      author: user._id,
      replies: [{
        content: 'fs 모듈을 사용하세요.',
        author: user._id,
      }]
    });

    await forum.save();

    const foundForum = await Forum.findOne({ title: 'Node.js 질문' }).populate('author').populate('replies.author');
    expect(foundForum.content).toBe('Node.js에서 파일을 어떻게 다루나요?');
    expect(foundForum.replies).toHaveLength(1);
    expect(foundForum.replies[0].content).toBe('fs 모듈을 사용하세요.');
  });
});
