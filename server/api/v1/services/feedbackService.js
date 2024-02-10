const Feedback = require('../models/Feedback');

async function submitFeedback(feedbackData) {
  const feedback = new Feedback(feedbackData);
  await feedback.save();
  return feedback;
}

async function getAllFeedbacks() {
  return await Feedback.find({});
}

async function getFeedbackById(id) {
  const feedback = await Feedback.findById(id);
  if (!feedback) {
    throw new Error('Feedback not found');
  }
  return feedback;
}

module.exports = { submitFeedback, getAllFeedbacks, getFeedbackById };

