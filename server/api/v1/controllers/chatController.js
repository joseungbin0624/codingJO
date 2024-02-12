const chatService = require('../services/chatService');

// 채팅 생성
exports.createChat = async (req, res) => {
    try {
        const chat = await chatService.createChat(req.body.participants);
        res.status(201).json(chat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 메시지 추가
exports.addMessage = async (req, res) => {
    try {
        const chat = await chatService.addMessage(req.params.chatId, req.body.message);
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 채팅 조회
exports.getChatById = async (req, res) => {
    try {
        const chat = await chatService.getChatById(req.params.chatId);
        res.status(200).json(chat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// 사용자 채팅 조회
exports.getUserChats = async (req, res) => {
    try {
        const chats = await chatService.getUserChats(req.params.userId);
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
