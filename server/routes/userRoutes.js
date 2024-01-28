const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 회원가입
router.post('/register', userController.registerUser);

// 로그인
router.post('/login', userController.loginUser);

// 사용자 프로필 조회
router.get('/profile', userController.getUserProfile);

// 사용자 프로필 수정
router.put('/profile', userController.updateUserProfile);

module.exports = router;
