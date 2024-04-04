const { body } = require('express-validator');

exports.validateEvent = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Event name is required')
    .isLength({ min: 3, max: 50 })
    .withMessage('Event name must be between 3 and 50 characters'),
  body('startDate') // 수정: startTime -> startDate
    .notEmpty()
    .withMessage('Start date is required')
    .isISO8601()
    .withMessage('Start date must be a valid ISO 8601 date'),
  body('endDate') // 수정: endTime -> endDate
    .notEmpty()
    .withMessage('End date is required')
    .isISO8601()
    .withMessage('End date must be a valid ISO 8601 date')
    .custom((value, { req }) => value > req.body.startDate)
    .withMessage('End date must be after start date'),
  body('location')
    .optional()
    .isLength({ max: 200 })
    .withMessage('Location must not exceed 200 characters'),
];
