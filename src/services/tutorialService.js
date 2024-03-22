import api from '../utils/api';

export const getAllTutorials = async () => {
  try {
    const response = await api.get('/tutorials');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch tutorials: ${error.response?.data?.message || error.message}`);
  }
};

export const getTutorialById = async (tutorialId) => {
  try {
    const response = await api.get(`/tutorials/${tutorialId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch tutorial details: ${error.response?.data?.message || error.message}`);
  }
};
