import axios from 'axios';

const API_URL = '/api/v1';

const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

export default {
  registerUser,
  loginUser,
};
