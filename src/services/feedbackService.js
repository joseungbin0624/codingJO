import api from '../utils/api';

const submitFeedback = async (courseId, feedbackData) => {
  const response = await api.post(`/feedback`, { courseId, ...feedbackData });
  return response.data;
};

export const feedbackService = {
  submitFeedback
};