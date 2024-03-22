import api from '../utils/api';

export const getUserChats = async () => {
  try {
    const response = await api.get('/chats');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch chats: ${error.response?.data?.message || error.message}`);
  }
};

export const sendMessage = async (chatId, messageData) => {
  try {
    const response = await api.post(`/chats/${chatId}/messages`, messageData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to send message: ${error.response?.data?.message || error.message}`);
  }
};

export const getChatById = async (chatId) => {
  try {
    const response = await api.get(`/chats/${chatId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch chat by ID: ${error.response?.data?.message || error.message}`);
  }
};
