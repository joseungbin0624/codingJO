const express = require('express');
const router = express.Router();
const { createChat, addMessage, getChatById, getUserChats } = require('../controllers/chatController');

router.post('/', createChat);
router.post('/:chatId/messages', addMessage);
router.get('/:chatId', getChatById);
router.get('/user/:userId', getUserChats);

module.exports = router;

