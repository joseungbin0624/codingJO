import axios from 'axios';

const API_URL = '/api/v1/feedbacks';

const submitFeedback = async (feedbackData) => {
  const response = await axios.post(API_URL, feedbackData);
  return response.data;
};

const getAllFeedbacks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getFeedbackById = async (id) => {
  // 이 부분은 서버 API에서 직접적인 지원이 없는 경우, 필요에 따라 구현할 수 있습니다.
  console.warn("getFeedbackById function needs to be implemented on the server-side.");
};

export default {
  submitFeedback,
  getAllFeedbacks,
  getFeedbackById, // 주의: 서버 측 구현 필요
};
