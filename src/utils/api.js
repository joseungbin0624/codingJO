import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 전역 에러 핸들링
api.interceptors.response.use(
  response => response,
  error => {
    // 공통 에러 처리 로직
    console.error('API Error:', error.response);
    return Promise.reject(error);
  }
);

export default api;
