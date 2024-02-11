import axios from 'axios';

const API_URL = '/api/v1/users';

const createUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

const updateUser = async (userId, updateData) => {
  const response = await axios.put(`${API_URL}/${userId}`, updateData);
  return response.data;
};

const deleteUser = async (userId) => {
  const response = await axios.delete(`${API_URL}/${userId}`);
  return response.data;
};

export default { createUser, updateUser, deleteUser };
