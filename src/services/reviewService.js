import axios from 'axios';

const API_URL = 'http://localhost:5000/api/reviews/';

// 특정 코스의 리뷰 가져오기
const getReviewsByCourseId = async (courseId) => {
  const response = await axios.get(API_URL + `course/${courseId}`);
  return response.data;
};

// 새 리뷰 추가
const addReview = async (reviewData) => {
  const response = await axios.post(API_URL, reviewData);
  return response.data;
};

// 리뷰 업데이트
const updateReview = async (reviewId, reviewData) => {
  const response = await axios.put(API_URL + `${reviewId}`, reviewData);
  return response.data;
};

// 리뷰 삭제
const deleteReview = async (reviewId) => {
  const response = await axios.delete(API_URL + `${reviewId}`);
  return response.data;
};

const reviewService = {
  getReviewsByCourseId,
  addReview,
  updateReview,
  deleteReview,
};

export default reviewService;

