// supportService.js
const SupportTicket = require('../models/SupportTicket');

async function createTicket(ticketData) {
    const ticket = new SupportTicket(ticketData);
    await ticket.save();
    return ticket;
}

async function getAllTickets() {
    return await SupportTicket.find({});
}

async function getTicketById(id) {
    const ticket = await SupportTicket.findById(id);
    if (!ticket) {
        throw new Error('Ticket not found');
    }
    return ticket;
}

async function updateTicketStatus(id, status) {
    const ticket = await SupportTicket.findByIdAndUpdate(id, { status: status }, { new: true });
    if (!ticket) {
        throw new Error('Ticket not found');
    }
    return ticket;
}

async function getTicketsByUser(userId) {
    return await SupportTicket.find({ userId: userId });
}

module.exports = { createTicket, getAllTickets, getTicketById, updateTicketStatus, getTicketsByUser };
