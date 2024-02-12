const Chat = require('../models/Chat');

// 새 채팅 시작
async function createChat(participants) {
    const chat = new Chat({ participants });
    await chat.save();
    return chat;
}

// 채팅 메시지 추가
async function addMessage(chatId, message) {
    const chat = await Chat.findById(chatId);
    if (!chat) {
        throw new Error('Chat not found');
    }
    chat.messages.push(message);
    await chat.save();
    return chat;
}

// 특정 채팅 조회
async function getChatById(chatId) {
    const chat = await Chat.findById(chatId).populate('participants').populate('messages.sender');
    if (!chat) {
        throw new Error('Chat not found');
    }
    return chat;
}

// 사용자의 모든 채팅 조회
async function getUserChats(userId) {
    const chats = await Chat.find({ participants: userId }).populate('participants');
    return chats;
}

module.exports = {
    createChat,
    addMessage,
    getChatById,
    getUserChats,
};

