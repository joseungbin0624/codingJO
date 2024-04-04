const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Chat = require('../../api/v1/models/Chat');
const chatService = require('../../api/v1/services/chatService');
const User = require('../../api/v1/models/User');

describe('ChatService Tests', () => {
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
    await Chat.deleteMany({});
    await User.deleteMany({});
  });

  it('should create a new chat between two users', async () => {
    const user1 = await User.create({ username: 'user1', email: 'user1@example.com', password: 'password' });
    const user2 = await User.create({ username: 'user2', email: 'user2@example.com', password: 'password' });

    const chat = await chatService.createChat([user1._id, user2._id]);
    expect(chat).toHaveProperty('_id');
    expect(chat.participants.map(String)).toEqual(expect.arrayContaining([user1._id.toString(), user2._id.toString()]));
  });

  it('should add a message to a chat', async () => {
    const user1 = await User.create({ username: 'user1Chat', email: 'user1chat@example.com', password: 'password' });
    const user2 = await User.create({ username: 'user2Chat', email: 'user2chat@example.com', password: 'password' });
  
    const chat = await chatService.createChat([user1._id, user2._id]);
    const message = {
      sender: user1._id,
      message: 'Hello, how are you?', // 수정됨: text -> message
    };
  
    await chatService.addMessage(chat._id, message);
    const updatedChat = await Chat.findById(chat._id).populate('messages.sender');
  
    expect(updatedChat.messages.length).toBe(1);
    expect(updatedChat.messages[0].message).toBe(message.message); // 수정됨: text -> message
  });

  it('should retrieve all chats for a user', async () => {
    const user1 = await User.create({ username: 'userMultiChat1', email: 'usermultichat1@example.com', password: 'password' });
    const user2 = await User.create({ username: 'userMultiChat2', email: 'usermultichat2@example.com', password: 'password' });
    const user3 = await User.create({ username: 'userMultiChat3', email: 'usermultichat3@example.com', password: 'password' });

    await chatService.createChat([user1._id, user2._id]);
    await chatService.createChat([user1._id, user3._id]);

    const chats = await chatService.getUserChats(user1._id);
    expect(chats.length).toBe(2);
  });
});
