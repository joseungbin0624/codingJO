// 파일 경로: E:\project\codingJO\server\api\v1\routes\searchRoutes.js
const express = require('express');
const searchController = require('../controllers/searchController');
const router = express.Router();

router.post('/', searchController.createSearchEntry);
// 수정된 부분: 경로 매개변수 대신 쿼리 매개변수 사용
router.get('/', searchController.getSearchResultsByQuery);

module.exports = router;
