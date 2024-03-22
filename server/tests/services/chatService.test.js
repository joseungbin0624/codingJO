const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Chat = require('../../api/v1/models/Chat');
const chatService = require('../../api/v1/services/chatService');
const User = require('../../api/v1/models/User');

describe('ChatService Tests', () => {
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

    beforeEach(async () => {
        await Chat.deleteMany({});
        await User.deleteMany({});
    });

    it('createChat should create a new chat successfully', async () => {
        const user1 = await User.create({ username: 'user1', email: 'user1@example.com', password: 'password' });
        const user2 = await User.create({ username: 'user2', email: 'user2@example.com', password: 'password' });
        const participants = [user1._id, user2._id];
        const chat = await chatService.createChat(participants);
        expect(chat.participants.map(id => id.toString())).toEqual(expect.arrayContaining(participants.map(id => id.toString())));
    });

    it('addMessage should add a message to a chat', async () => {
        const user1 = await User.create({ username: 'user1', email: 'user1@example.com', password: 'password' });
        const user2 = await User.create({ username: 'user2', email: 'user2@example.com', password: 'password' });
        const chat = await chatService.createChat([user1._id, user2._id]);
        await chatService.addMessage(chat.id, { sender: user1._id, text: 'Hello' });
        const refreshedChat = await Chat.findById(chat.id).populate({
            path: 'messages.sender',
            model: 'User'
        });
        expect(refreshedChat.messages.length).toBe(1);
        expect(refreshedChat.messages[0].text).toBe('Hello');
    });

    it('getChatById should retrieve a chat by id', async () => {
        const user1 = await User.create({ username: 'user1', email: 'user1@example.com', password: 'password' });
        const user2 = await User.create({ username: 'user2', email: 'user2@example.com', password: 'password' });
        const chat = await chatService.createChat([user1._id, user2._id]);
        const foundChat = await chatService.getChatById(chat.id);
        expect(foundChat.id).toBe(chat.id);
    });

    it('getUserChats should retrieve all chats for a user', async () => {
        const user1 = await User.create({ username: 'user1', email: 'user1@example.com', password: 'password' });
        const user2 = await User.create({ username: 'user2', email: 'user2@example.com', password: 'password' });
        await chatService.createChat([user1._id, user2._id]);
        const chats = await chatService.getUserChats(user1._id);
        expect(chats.length).toBe(1);
        expect(chats[0].participants.map(id => id.toString())).toContain(user1._id.toString());
        expect(chats[0].participants.map(id => id.toString())).toContain(user2._id.toString());
    });
});
