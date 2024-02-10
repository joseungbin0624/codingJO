const { body } = require('express-validator');

exports.validateReview = [
  body('content')
    .trim()
    .optional()
    .isLength({ max: 500 })
    .withMessage('Review content must not exceed 500 characters'),
  body('rating')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be an integer between 1 and 5'),
  body('course')
    .notEmpty()
    .withMessage('Course ID is required')
    .isMongoId()
    .withMessage('Invalid course ID format'),
];