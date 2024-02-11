import jwt_decode from 'jwt-decode';
import { setAuthToken } from './api';

// 사용자가 인증되었는지 확인하는 함수
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  const decoded = jwt_decode(token);
  return decoded.exp > Date.now() / 1000;
};

// 로그아웃 함수
export const logoutUser = () => {
  localStorage.removeItem('token'); // 로컬 스토리지에서 토큰 제거
  setAuthToken(false); // axios 헤더에서 토큰 제거
  window.location.href = '/login'; // 로그인 페이지로 리다이렉트
};
