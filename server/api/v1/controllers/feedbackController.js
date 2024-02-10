const feedbackService = require('../services/feedbackService');

async function submitFeedback(req, res) {
  try {
    const feedback = await feedbackService.submitFeedback(req.body);
    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllFeedbacks(req, res) {
  try {
    const feedbacks = await feedbackService.getAllFeedbacks();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getFeedbackById(req, res) {
  try {
    const feedback = await feedbackService.getFeedbackById(req.params.id);
    if (!feedback) {
      return res.status(404).json({ message: 'Feedback not found' });
    }
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { submitFeedback, getAllFeedbacks, getFeedbackById };
