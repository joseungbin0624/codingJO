import api from '../utils/api';
import { saveToken, removeToken, getToken } from '../utils/authUtils';

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    saveToken(response.data.token);
    return response.data;
  } catch (error) {
    throw new Error(`Login failed: ${error.response?.data?.message || error.message}`);
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    saveToken(response.data.token);
    return response.data;
  } catch (error) {
    throw new Error(`Registration failed: ${error.response?.data?.message || error.message}`);
  }
};

export const logout = () => {
  removeToken();
};

export const fetchCurrentUser = async () => {
  try {
    const response = await api.get('/auth/user', {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch current user: ${error.response?.data?.message || error.message}`);
  }
};
