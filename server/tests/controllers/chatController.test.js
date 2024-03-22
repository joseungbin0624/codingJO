const request = require('supertest');
const express = require('express');
const chatController = require('../../api/v1/controllers/chatController');
const chatService = require('../../api/v1/services/chatService');
jest.mock('../../api/v1/services/chatService');

const app = express();
app.use(express.json());

app.post('/chats', chatController.createChat);
app.post('/chats/:chatId/messages', chatController.addMessage);
app.get('/chats/:chatId', chatController.getChatById);
app.get('/chats/user/:userId', chatController.getUserChats);

describe('Chat Controller Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('createChat: Should create a chat and return status 201', async () => {
    const mockChat = { id: '1', participants: ['user1', 'user2'], messages: [] };
    chatService.createChat.mockResolvedValue(mockChat);
    
    const response = await request(app)
      .post('/chats')
      .send({ participants: mockChat.participants });

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(mockChat);
    expect(chatService.createChat).toHaveBeenCalledWith(mockChat.participants);
  });

  test('addMessage: Should add a message to the chat and return status 200', async () => {
    const chatId = '1';
    const mockMessage = { sender: 'user1', message: 'Hello World' };
    chatService.addMessage.mockResolvedValue({
      ...mockMessage,
      chatId,
      timestamp: Date.now(),
    });

    const response = await request(app)
      .post(`/chats/${chatId}/messages`)
      .send({ message: mockMessage.message });

    expect(response.statusCode).toBe(200);
    expect(chatService.addMessage).toHaveBeenCalledWith(chatId, mockMessage.message);
  });

  test('getChatById: Should return a chat by ID and status 200', async () => {
    const chatId = '1';
    const mockChat = { id: chatId, participants: ['user1', 'user2'], messages: [] };
    chatService.getChatById.mockResolvedValue(mockChat);

    const response = await request(app).get(`/chats/${chatId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockChat);
    expect(chatService.getChatById).toHaveBeenCalledWith(chatId);
  });

  test('getUserChats: Should return chats for a user and status 200', async () => {
    const userId = 'user1';
    const mockChats = [{ id: '1', participants: [userId, 'user2'], messages: [] }];
    chatService.getUserChats.mockResolvedValue(mockChats);

    const response = await request(app).get(`/chats/user/${userId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockChats);
    expect(chatService.getUserChats).toHaveBeenCalledWith(userId);
  });
});
