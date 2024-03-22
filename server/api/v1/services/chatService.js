const Chat = require('../models/Chat');

async function createChat(participants) {
    const chat = new Chat({ participants });
    await chat.save();
    return chat;
}

async function addMessage(chatId, message) {
    const chat = await Chat.findById(chatId);
    if (!chat) {
        throw new Error('Chat not found');
    }
    chat.messages.push(message);
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
