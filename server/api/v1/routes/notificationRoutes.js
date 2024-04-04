const express = require('express');
const { sendNotification, getUserNotifications, getAllNotifications } = require('../controllers/notificationController'); // getAllNotifications는 모든 알림을 조회하는 새로운 함수입니다.
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// 기존 경로 유지
router.get('/user/:userId', authMiddleware, getUserNotifications);

// 새로운 알림 생성을 위한 경로 추가
router.post('/', authMiddleware, sendNotification);

// 모든 알림 조회를 위한 경로 추가 (getAllNotifications 함수는 새로 만들어야 함)
router.get('/', authMiddleware, getAllNotifications);

module.exports = router;
