import { registerUser, loginUser } from '../../utils/apiUtils';
import api from '../../utils/api';

jest.mock('../../utils/api');

describe('apiUtils 함수', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('registerUser 함수가 호출될 때 api.post를 사용하는지 확인', async () => {
    const userData = { username: 'testuser', password: 'password' };
    await registerUser(userData);
    expect(api.post).toHaveBeenCalledWith('/auth/register', userData);
  });

  test('loginUser 함수가 호출될 때 api.post를 사용하는지 확인', async () => {
    const loginData = { username: 'testuser', password: 'password' };
    await loginUser(loginData);
    expect(api.post).toHaveBeenCalledWith('/auth/login', loginData);
  });
});
