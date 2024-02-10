import api from './api';

const getRecommendedCourses = async (userId) => {
  try {
    const response = await api.get(`/recommendations/${userId}`);
    return response.data.courses;
  } catch (error) {
    console.error('Error fetching recommended courses:', error);
    throw error;
  }
};

export default getRecommendedCourses;

