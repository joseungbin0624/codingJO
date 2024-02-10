const { body } = require('express-validator');

exports.validateFeedback = [
  body('content')
    .trim()
    .notEmpty()
    .withMessage('Feedback content is required')
    .isLength({ min: 10, max: 500 })
    .withMessage('Feedback content must be between 10 and 500 characters'),
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be an integer between 1 and 5'),
];
