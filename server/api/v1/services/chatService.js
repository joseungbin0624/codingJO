// 파일 경로: E:\project\codingJO\server\api\v1\services\chatService.js
const Chat = require('../models/Chat');

async function createChat(participants) {
    const chat = new Chat({ participants });
    await chat.save();
    return chat;
}

async function addMessage(chatId, messageObj) {
    const chat = await Chat.findById(chatId);
    if (!chat) {
        throw new Error('Chat not found');
    }
    // 메시지 객체에 sender와 message 필드를 포함하여 새로운 메시지 객체를 생성합니다.
    chat.messages.push({
        sender: messageObj.sender,
        message: messageObj.message,
        timestamp: new Date() // 메시지에 대한 타임스탬프를 명시적으로 설정합니다.
    });
    await chat.save();
    return chat;
}

async function getChatById(chatId) {
    const chat = await Chat.findById(chatId).populate('participants').populate('messages.sender');
    if (!chat) {
        throw new Error('Chat not found');
    }
    return chat;
}

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
