import api from '../utils/api';

const createReview = async (reviewData) => {
  const response = await api.post('/reviews', reviewData);
  return response.data;
};

const getCourseReviews = async (courseId) => {
  const response = await api.get(`/reviews/${courseId}`);
  return response.data;
};

export const reviewService = {
  createReview,
  getCourseReviews,
};