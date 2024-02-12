// authUtils.js

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token);
    // Axios 기본 헤더 설정
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem('authToken');
    // Axios 기본 헤더 제거
    delete api.defaults.headers.common['Authorization'];
  }
};

export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

export const isAuthenticated = () => {
  const token = getAuthToken();
  return !!token;
};
