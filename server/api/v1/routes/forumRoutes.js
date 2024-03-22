// 기존 코드
const express = require('express');
const { createForum, getAllForums, getForumById, addPostToForum } = require('../controllers/forumController'); // 수정됨
const { validateForum } = require('../validators/forumValidator');
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

router.post('/', validateForum, validateRequest, createForum);
router.get('/', getAllForums);
router.get('/:forumId', getForumById);
router.post('/:forumId/posts', validateRequest, addPostToForum); // 추가됨

module.exports = router;
