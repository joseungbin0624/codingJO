import axios from 'axios';

const API_URL = '/api/v1/reviews';

const createReview = async (reviewData) => {
  const response = await axios.post(API_URL, reviewData);
  return response.data;
};

const getCourseReviews = async (courseId) => {
  const response = await axios.get(`${API_URL}/course/${courseId}`);
  return response.data;
};

export default { createReview, getCourseReviews };
