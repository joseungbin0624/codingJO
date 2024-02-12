import api from './api';
import { setAuthToken } from './apiUtils';

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  const { token } = response.data;
  setAuthToken(token);
  return response.data;
};

export const logout = () => {
  setAuthToken(null);
};

export const register = async userData => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};
