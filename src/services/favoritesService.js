import axios from 'axios';

const API_URL = 'http://localhost:5000/api/favorites/';

// 사용자의 즐겨찾기 목록 가져오기
const getFavorites = async (userId) => {
  const response = await axios.get(API_URL + `user/${userId}`);
  return response.data;
};

// 즐겨찾기에 코스 추가
const addFavorite = async (userId, courseId) => {
  const response = await axios.post(API_URL, { userId, courseId });
  return response.data;
};

// 즐겨찾기에서 코스 제거
const removeFavorite = async (userId, courseId) => {
  const response = await axios.delete(API_URL + `user/${userId}/course/${courseId}`);
  return response.data;
};

const favoritesService = {
  getFavorites,
  addFavorite,
  removeFavorite,
};

export default favoritesService;

