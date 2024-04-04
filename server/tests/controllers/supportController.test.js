const supportController = require('../../api/v1/controllers/supportController');
const supportService = require('../../api/v1/services/supportService');

jest.mock('../../api/v1/services/supportService');

describe('Support Controller - Unit Tests', () => {
    let req, res;

    beforeEach(() => {
        jest.clearAllMocks();
        req = { params: {}, body: {} };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis()
        };
    });

    test('createTicket creates a support ticket', async () => {
        const mockTicket = { id: '1', userId: '1', issue: 'Issue description' };
        req.body = { userId: '1', issue: 'Issue description' };
        supportService.createTicket.mockResolvedValue(mockTicket);

        await supportController.createTicket(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockTicket);
    });

    test('getAllTickets returns all tickets', async () => {
        const mockTickets = [{ id: '1', userId: '1', issue: 'Issue description' }];
        supportService.getAllTickets.mockResolvedValue(mockTickets);

        await supportController.getAllTickets(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockTickets);
    });

    test('updateTicketStatus updates a ticket\'s status', async () => {
        const ticketId = '1';
        const statusUpdate = { status: 'resolved' };
        req.params.id = ticketId; // Corrected parameter name from ticketId to id
        req.body = statusUpdate;
        supportService.updateTicketStatus.mockResolvedValue({ ...statusUpdate, id: ticketId });

        await supportController.updateTicketStatus(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(supportService.updateTicketStatus).toHaveBeenCalledWith(ticketId, statusUpdate.status);
    });

    test('getTicketsByUser returns tickets for a specific user', async () => {
        const userId = '1';
        const mockTickets = [{ id: '1', userId: '1', issue: 'Issue description' }];
        req.params.userId = userId;
        supportService.getTicketsByUser.mockResolvedValue(mockTickets);

        await supportController.getTicketsByUser(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockTickets);
    });
});
