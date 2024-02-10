const { body } = require('express-validator');

exports.validateForum = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Forum title is required')
    .isLength({ min: 5, max: 100 })
    .withMessage('Forum title must be between 5 and 100 characters'),
  body('description')
    .trim()
    .optional()
    .isLength({ max: 500 })
    .withMessage('Description must not exceed 500 characters'),
];
