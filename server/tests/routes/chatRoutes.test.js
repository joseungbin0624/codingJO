const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const chatRoutes = require('../../api/v1/routes/chatRoutes');
const app = express();
app.use(bodyParser.json());
app.use('/chats', chatRoutes);

jest.mock('../../api/v1/controllers/chatController', () => ({
  createChat: (req, res) => res.status(201).send({}),
  addMessage: (req, res) => res.status(200).send({}),
  getChatById: (req, res) => res.status(200).send({}),
  getUserChats: (req, res) => res.status(200).send({})
}));

describe('ChatRoutes', () => {
  it('POST /chats - should create a chat', async () => {
    const response = await request(app).post('/chats').send({ participants: ['userId1', 'userId2'] });
    expect(response.statusCode).toBe(201);
  });

  // Additional route tests
});
