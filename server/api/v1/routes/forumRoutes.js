// forumRoutes.js
const express = require('express');
const { createForum, getAllForums, getForumById } = require('../controllers/forumController');
const { validateForum } = require('../validators/forumValidator');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/', validateForum, validateRequest, createForum);
router.get('/', getAllForums);
router.get('/:forumId', getForumById);

module.exports = router;
