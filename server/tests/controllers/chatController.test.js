const { createChat, addMessage, getChatById, getUserChats } = require('../../api/v1/controllers/chatController');
const chatService = require('../../api/v1/services/chatService');

jest.mock('../../api/v1/services/chatService');

describe('Chat Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('createChat은 새로운 채팅을 생성한다', async () => {
    const mockChat = { id: '1', participants: ['user1', 'user2'], messages: [] };
    req.body = { participants: mockChat.participants };
    chatService.createChat.mockResolvedValue(mockChat);

    await createChat(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockChat);
  });

  test('addMessage는 채팅에 메시지를 추가한다', async () => {
    const mockMessage = { chatId: '1', sender: 'user1', message: 'Hello World', timestamp: Date.now() };
    req.params.chatId = '1';
    req.body = { message: 'Hello World' };
    chatService.addMessage.mockResolvedValue(mockMessage);

    await addMessage(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockMessage);
  });

  test('getChatById는 ID로 채팅을 검색한다', async () => {
    const mockChat = { id: '1', participants: ['user1', 'user2'], messages: [] };
    req.params.chatId = '1';
    chatService.getChatById.mockResolvedValue(mockChat);

    await getChatById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockChat);
  });

  test('getUserChats는 사용자의 모든 채팅을 반환한다', async () => {
    const mockChats = [{ id: '1', participants: ['user1', 'user2'], messages: [] }];
    req.params.userId = 'user1';
    chatService.getUserChats.mockResolvedValue(mockChats);

    await getUserChats(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockChats);
  });
});
