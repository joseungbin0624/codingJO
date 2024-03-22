/**
 * @jest-environment jsdom
 */
import { saveToken, getToken, removeToken, isAuthenticated } from '../../utils/authUtils';

describe('authUtils 함수', () => {
  beforeEach(() => {
    // localStorage의 메소드를 명시적으로 모킹합니다.
    Storage.prototype.setItem = jest.fn();
    Storage.prototype.getItem = jest.fn().mockReturnValue('test_token'); // getItem이 'test_token'을 반환하도록 설정
    Storage.prototype.removeItem = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks(); // 각 테스트 이후에 모킹을 복원합니다.
  });

  test('saveToken이 localStorage에 토큰을 저장하는지 확인', () => {
    saveToken('test_token');
    expect(localStorage.setItem).toHaveBeenCalledWith('auth_token', 'test_token');
  });

  test('getToken이 저장된 토큰을 반환하는지 확인', () => {
    const token = getToken();
    expect(token).toBe('test_token');
    expect(localStorage.getItem).toHaveBeenCalledWith('auth_token');
  });

  test('removeToken이 토큰을 제거하는지 확인', () => {
    removeToken();
    expect(localStorage.removeItem).toHaveBeenCalledWith('auth_token');
  });

  test('isAuthenticated가 유효한 토큰이 있을 때 true를 반환하는지 확인', () => {
    expect(isAuthenticated()).toBeTruthy();
  });

  test('isAuthenticated가 토큰이 없을 때 false를 반환하는지 확인', () => {
    Storage.prototype.getItem.mockReturnValue(null); // getItem이 null을 반환하도록 재설정
    expect(isAuthenticated()).toBeFalsy();
  });
});
