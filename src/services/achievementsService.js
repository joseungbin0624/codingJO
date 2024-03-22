import api from '../utils/api';

export const getAchievements = async () => {
  try {
    const response = await api.get('/achievements');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch achievements: ${error.response?.data?.message || error.message}`);
  }
};
