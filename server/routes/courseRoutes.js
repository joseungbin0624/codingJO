const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// 코스 검색 및 필터링
router.get('/search', courseController.searchCourses);

// 코스 상세 정보 조회
router.get('/:id', courseController.getCourseById);

// 여기에 추가적인 코스 관련 라우트를 정의할 수 있습니다.
// 예: 코스 생성, 수정, 삭제 등

module.exports = router;
