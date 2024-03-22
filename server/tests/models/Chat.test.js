const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Chat = require('../../api/v1/models/Chat');
const User = require('../../api/v1/models/User');

describe('Chat 모델 테스트', () => {
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

  it('Chat 저장 및 검증', async () => {
    const user1 = new User({ username: 'user1', email: 'user1@example.com', password: 'password123' });
    const user2 = new User({ username: 'user2', email: 'user2@example.com', password: 'password123' });
    await user1.save();
    await user2.save();

    const chat = new Chat({
      participants: [user1._id, user2._id],
      messages: [
        {
          sender: user1._id,
          message: '안녕하세요!',
        },
      ],
    });

    const savedChat = await chat.save();
    expect(savedChat.participants.length).toEqual(2);
    expect(savedChat.messages.length).toEqual(1);
    expect(savedChat.messages[0].message).toEqual('안녕하세요!');
  });
});
