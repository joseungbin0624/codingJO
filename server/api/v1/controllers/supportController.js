const supportService = require('../services/supportService');

// 지원 티켓 생성
exports.createTicket = async (req, res) => {
    try {
        const ticket = await supportService.createTicket(req.body);
        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 모든 지원 티켓 조회
exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await supportService.getAllTickets();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 지원 티켓 상태 업데이트
exports.updateTicketStatus = async (req, res) => {
    try {
        const ticket = await supportService.updateTicketStatus(req.params.id, req.body.status);
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 사용자별 지원 티켓 조회
exports.getTicketsByUser = async (req, res) => {
    try {
        const tickets = await supportService.getTicketsByUser(req.params.userId);
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
