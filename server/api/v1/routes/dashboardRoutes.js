const express = require('express');
const dashboardController = require('../controllers/dashboardController');
const router = express.Router();

// 대시보드 조회를 위한 라우트 추가
// 이 라우트는 클라이언트로부터 userId를 받아 해당하는 대시보드를 조회하거나 새로 생성합니다.
router.post('/dashboard', dashboardController.getDashboardByUserId);

// 위젯을 대시보드에 추가하기 위한 라우트
router.post('/addWidget', dashboardController.addWidgetToDashboard);

// 대시보드에서 위젯을 제거하기 위한 라우트
router.post('/removeWidget', dashboardController.removeWidgetFromDashboard);

module.exports = router;
