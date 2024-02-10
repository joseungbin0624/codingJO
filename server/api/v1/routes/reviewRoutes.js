const express = require('express');
const { createReview } = require('../controllers/reviewController'); // 변경된 부분
const { validateReview } = require('../validators/reviewValidator');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/', validateReview, validateRequest, createReview);

module.exports = router;

