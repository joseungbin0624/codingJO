import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getUserChats } from '../../services/chatService';

describe('Chat Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('fetches user chats successfully', async () => {
    const chats = [{ id: 1, name: 'Chat Room' }];
    mock.onGet('/chats').reply(200, chats);

    const result = await getUserChats();
    expect(result).toEqual(chats);
  });

  it('handles fetch user chats error', async () => {
    mock.onGet('/chats').networkError();
    await expect(getUserChats()).rejects.toThrow('Network Error');
  });
});
