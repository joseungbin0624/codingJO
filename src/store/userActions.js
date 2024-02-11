import { USER_LOGIN_SUCCESS, USER_LOGOUT } from './actionTypes';
import axios from 'axios';

const API_URL = '/api/users';

export const loginSuccess = (userInfo) => ({
  type: USER_LOGIN_SUCCESS,
  payload: userInfo,
});

export const logout = () => ({
  type: USER_LOGOUT,
});

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    dispatch(loginSuccess(response.data));
    // 추가적으로 로그인 성공 후 필요한 작업 수행
  } catch (error) {
    // 에러 처리
    console.error(error);
  }
};
