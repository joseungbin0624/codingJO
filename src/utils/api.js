import axios from 'axios';

// 수정된 환경 변수 이름을 사용
const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL, // 수정된 변수 이름을 참조
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
