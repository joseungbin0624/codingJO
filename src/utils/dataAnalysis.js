// 데이터 분석 유틸리티
const { getAllFeedbacks } = require('../../server/api/v1/services/feedbackService');

// 특정 코스에 대한 피드백을 분석하는 함수
async function analyzeCourseFeedback(courseId) {
  const feedbacks = await getAllFeedbacks();
  const courseFeedbacks = feedbacks.filter(feedback => feedback.courseId === courseId);
  // 피드백 평균 점수 계산
  const averageRating = courseFeedbacks.reduce((acc, curr) => acc + curr.rating, 0) / courseFeedbacks.length;
  return {
    averageRating,
    feedbacksCount: courseFeedbacks.length
  };
}

module.exports = { analyzeCourseFeedback };
