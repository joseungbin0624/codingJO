import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { login } from '../../services/authService';

describe('Auth Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('logs in successfully', async () => {
    const userData = { username: 'user', password: 'pass' };
    const response = { token: 'fake-token' };
    mock.onPost('/auth/login').reply(200, response);

    const result = await login(userData);
    expect(result).toEqual(response);
  });

  it('handles login error', async () => {
    mock.onPost('/auth/login').networkError();
    await expect(login({ username: 'user', password: 'pass' })).rejects.toThrow('Network Error');
  });
});
