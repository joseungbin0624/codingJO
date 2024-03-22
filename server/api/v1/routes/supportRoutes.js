const express = require('express');
const supportController = require('../controllers/supportController');
const router = express.Router();

router.post('/', supportController.createTicket);
router.get('/', supportController.getAllTickets);
router.put('/:id', supportController.updateTicketStatus);
router.get('/user/:userId', supportController.getTicketsByUser);

module.exports = router;
