const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const supportService = require('../../api/v1/services/supportService');
const SupportTicket = require('../../api/v1/models/SupportTicket');
const User = require('../../api/v1/models/User');

describe('Support Service Tests', () => {
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
        await SupportTicket.deleteMany({});
        await User.deleteMany({});
    });

    it('createTicket should create a new support ticket', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        const ticketData = { userId: user._id, issue: 'Test Issue', status: 'open' };
        const ticket = await supportService.createTicket(ticketData);
        
        expect(ticket.issue).toBe(ticketData.issue);
        expect(ticket.status).toBe(ticketData.status);
        expect(ticket.userId.toString()).toBe(user._id.toString());
    });

    it('getAllTickets should retrieve all tickets', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        await supportService.createTicket({ userId: user._id, issue: 'Test Issue 1', status: 'open' });
        await supportService.createTicket({ userId: user._id, issue: 'Test Issue 2', status: 'pending' });
        
        const tickets = await supportService.getAllTickets();
        expect(tickets.length).toBe(2);
    });

    it('getTicketById should retrieve a ticket by ID', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        const ticket = await supportService.createTicket({ userId: user._id, issue: 'Test Issue', status: 'open' });
        
        const foundTicket = await supportService.getTicketById(ticket._id);
        expect(foundTicket._id.toString()).toBe(ticket._id.toString());
    });

    it('updateTicketStatus should update the status of a ticket', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        const ticket = await supportService.createTicket({ userId: user._id, issue: 'Test Issue', status: 'open' });
        
        const updatedTicket = await supportService.updateTicketStatus(ticket._id, 'closed');
        expect(updatedTicket.status).toBe('closed');
    });

    it('getTicketsByUser should retrieve all tickets for a user', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        await supportService.createTicket({ userId: user._id, issue: 'Test Issue 1', status: 'open' });
        await supportService.createTicket({ userId: user._id, issue: 'Test Issue 2', status: 'pending' });
        
        const tickets = await supportService.getTicketsByUser(user._id);
        expect(tickets.length).toBe(2);
    });
});
