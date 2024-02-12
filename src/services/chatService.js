import api from '../utils/api';

export const chatService = {
  // 새 채팅 시작
  createChat: async (participants) => {
    const response = await api.post('/api/v1/chats', { participants });
    return response.data;
  },

  // 특정 채팅에 메시지 추가
  addMessage: async (chatId, message) => {
    const response = await api.post(`/api/v1/chats/${chatId}/messages`, message);
    return response.data;
  },

  // 사용자의 모든 채팅 조회
  getUserChats: async (userId) => {
    const response = await api.get(`/api/v1/chats/user/${userId}`);
    return response.data;
  },
};
