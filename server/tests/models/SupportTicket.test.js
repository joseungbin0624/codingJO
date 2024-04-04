const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const SupportTicket = require('../../api/v1/models/SupportTicket');
const User = require('../../api/v1/models/User');

describe('SupportTicket Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('create & save support ticket successfully', async () => {
    const user = await User.create({ username: 'userTest', email: 'user@test.com', password: 'password123' });

    const ticketData = { userId: user._id, issue: 'Login Problem', status: 'open' };
    const ticket = new SupportTicket(ticketData);
    const savedTicket = await ticket.save();

    expect(savedTicket._id).toBeDefined();
    expect(savedTicket.issue).toBe('Login Problem');
    expect(savedTicket.status).toBe('open');
  });
});
