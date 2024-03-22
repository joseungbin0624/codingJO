import api from '../utils/api';

export const getCourseReviews = async (courseId) => {
  try {
    const response = await api.get(`/reviews/${courseId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch course reviews: ${error.response?.data?.message || error.message}`);
  }
};

export const createReview = async (courseId, reviewData) => {
  try {
    const response = await api.post(`/reviews/${courseId}`, reviewData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to submit review: ${error.response?.data?.message || error.message}`);
  }
};
