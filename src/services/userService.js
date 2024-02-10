import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

// 사용자 정보 가져오기
const getUserById = async (userId) => {
  const response = await axios.get(API_URL + `${userId}`);
  return response.data;
};

// 사용자 정보 업데이트
const updateUser = async (userId, userData) => {
  const response = await axios.put(API_URL + `${userId}`, userData);
  return response.data;
};

// 사용자 삭제
const deleteUser = async (userId) => {
  const response = await axios.delete(API_URL + `${userId}`);
  return response.data;
};

const userService = {
  getUserById,
  updateUser,
  deleteUser,
};

export default userService;

