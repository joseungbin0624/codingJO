const { body } = require('express-validator');

exports.validateEvent = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Event name is required')
    .isLength({ min: 3, max: 50 })
    .withMessage('Event name must be between 3 and 50 characters'),
  body('startTime')
    .notEmpty()
    .withMessage('Start time is required')
    .isISO8601()
    .withMessage('Start time must be a valid ISO 8601 date'),
  body('endTime')
    .notEmpty()
    .withMessage('End time is required')
    .isISO8601()
    .withMessage('End time must be a valid ISO 8601 date')
    .custom((value, { req }) => value > req.body.startTime)
    .withMessage('End time must be after start time'),
  body('location')
    .optional()
    .isLength({ max: 200 })
    .withMessage('Location must not exceed 200 characters'),
];
