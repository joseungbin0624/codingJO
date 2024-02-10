import axios from 'axios';

const API_URL = 'http://localhost:5000/api/feedback/';

// 피드백 목록 가져오기
const getFeedbacks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 새 피드백 제출
const submitFeedback = async (feedbackData) => {
  const response = await axios.post(API_URL, feedbackData);
  return response.data;
};

const feedbackService = {
  getFeedbacks,
  submitFeedback,
};

export default feedbackService;

