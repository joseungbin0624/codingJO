import api from '../utils/api';

const createUser = async (userData) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

const updateUser = async (userId, updateData) => {
  const response = await api.put(`/users/${userId}`, updateData);
  return response.data;
};

const deleteUser = async (userId) => {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
};

export const userService = {
  createUser,
  updateUser,
  deleteUser,
};