const Review = require('../models/Review');

async function createReview(reviewData) {
  const review = new Review(reviewData);
  await review.save();
  return review;
}

async function getCourseReviews(courseId) {
  return await Review.find({ course: courseId });
}

module.exports = {
  createReview,
  getCourseReviews,
};
