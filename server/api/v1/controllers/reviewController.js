const reviewService = require('../services/reviewService');

async function createReview(req, res) {
  try {
    const review = await reviewService.createReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCourseReviews(req, res) {
  try {
    const reviews = await reviewService.getCourseReviews(req.params.courseId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createReview, getCourseReviews };
