const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');

// 포럼 글 목록 조회
router.get('/', forumController.getAllPosts);

// 새 글 작성
router.post('/', forumController.createPost);

// 글 수정 - forumController.updatePost 함수가 정의되었을 때 사용
// router.put('/:id', forumController.updatePost);

// 글 삭제 - forumController.deletePost 함수가 정의되었을 때 사용
// router.delete('/:id', forumController.deletePost);

module.exports = router;
