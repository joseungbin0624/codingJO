import api from '../utils/api';

const addFavorite = async (userId, courseId) => {
  const response = await api.post(`/favorites`, { userId, courseId });
  return response.data;
};

const getUserFavorites = async (userId) => {
  const response = await api.get(`/favorites/${userId}`);
  return response.data;
};

const removeFavorite = async (userId, courseId) => {
  const response = await api.delete(`/favorites/${userId}/${courseId}`);
  return response.data;
};

export const favoritesService = {
  addFavorite,
  getUserFavorites,
  removeFavorite
};
