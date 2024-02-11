import api, { setAuthToken } from './api';

// 로그인 함수
export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials);
  setAuthToken(response.data.token); // 로그인 성공 후 토큰 설정
  localStorage.setItem('token', response.data.token); // 토큰을 로컬 스토리지에 저장
  return response.data;
};

// 코스 정보를 가져오는 함수
export const fetchCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};
