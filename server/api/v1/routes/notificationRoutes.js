const express = require('express');
const { getUserNotifications } = require('../controllers/notificationController'); // 변경된 부분
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/user/:userId', authMiddleware, getUserNotifications);

module.exports = router;
