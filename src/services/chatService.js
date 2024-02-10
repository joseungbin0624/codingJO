import axios from 'axios';

const API_URL = 'http://localhost:5000/api/chat/';

const getMessages = async (chatId) => {
  const response = await axios.get(API_URL + `messages/${chatId}`);
  return response.data;
};

const sendMessage = async (chatId, messageData) => {
  const response = await axios.post(API_URL + `send/${chatId}`, messageData);
  return response.data;
};

const chatService = {
  getMessages,
  sendMessage,
};

export default chatService;

