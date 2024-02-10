const express = require('express');
const { validateFeedback } = require('../validators/feedbackValidator');
const { submitFeedback } = require('../controllers/feedbackController'); // 변경된 부분
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/', validateFeedback, validateRequest, submitFeedback);

module.exports = router;
