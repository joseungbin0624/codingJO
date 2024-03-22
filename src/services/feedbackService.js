// 파일 경로: E:\project\codingJO\src\services\feedbackService.js
import api from '../utils/api';

export const submitFeedback = async (feedbackData) => {
  try {
    const response = await api.post('/feedback', feedbackData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to submit feedback: ${error.message}`);
  }
};
