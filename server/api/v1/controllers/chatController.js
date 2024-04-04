const chatService = require('../services/chatService');

// 채팅 생성
exports.createChat = async (req, res) => {
    try {
        const chat = await chatService.createChat(req.body.participants);
        res.status(201).json(chat);
    } catch (error) {
        console.error(`채팅 생성 중 에러 발생: ${error.message}`);
        res.status(500).json({ message: "채팅 생성에 실패했습니다." });
    }
};

// 메시지 추가
exports.addMessage = async (req, res) => {
    try {
        const chat = await chatService.addMessage(req.params.chatId, req.body);
        res.status(200).json(chat);
    } catch (error) {
        console.error(`메시지 추가 중 에러 발생: ${error.message}`);
        // chatService에서 Chat not found 에러를 발생시킬 경우 404 응답
        if (error.message === 'Chat not found') {
            res.status(404).json({ message: "채팅을 찾을 수 없습니다." });
        } else {
            res.status(500).json({ message: "메시지를 추가할 수 없습니다." });
        }
    }
};

// 채팅 조회
exports.getChatById = async (req, res) => {
    try {
        const chat = await chatService.getChatById(req.params.chatId);
        if (!chat) {
            return res.status(404).json({ message: "채팅을 찾을 수 없습니다." });
        }
        res.status(200).json(chat);
    } catch (error) {
        console.error(`채팅 조회 중 에러 발생: ${error.message}`);
        res.status(500).json({ message: "채팅 조회에 실패했습니다." });
    }
};

// 사용자 채팅 조회
exports.getUserChats = async (req, res) => {
    try {
        const chats = await chatService.getUserChats(req.params.userId);
        res.status(200).json(chats);
    } catch (error) {
        console.error(`사용자 채팅 조회 중 에러 발생: ${error.message}`);
        res.status(500).json({ message: "사용자 채팅을 조회할 수 없습니다." });
    }
};
