const Review = require('../models/Review');

async function createReview(reviewData) {
  const review = new Review(reviewData);
  await review.save();
  return review;
}

// 코스 ID에 따른 리뷰 검색을 위한 수정
async function getCourseReviews(courseId) {
  return await Review.find({ targetId: courseId });
}

module.exports = {
  createReview,
  getCourseReviews,
};
