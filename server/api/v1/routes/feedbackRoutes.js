// 기존 코드
const express = require('express');
const { validateFeedback } = require('../validators/feedbackValidator');
const { submitFeedback, getAllFeedbacks, getFeedbackById } = require('../controllers/feedbackController'); // 수정됨
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/', validateFeedback, validateRequest, submitFeedback);
router.get('/', getAllFeedbacks); // 추가됨
router.get('/:id', getFeedbackById); // 추가됨

module.exports = router;
