const express = require('express');
const { registerUser, updateUser, deleteUser } = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware'); // 수정된 방식
const validateRequest = require('../middlewares/validateRequest');

const router = express.Router();

// 예시 라우트 정의
router.post('/register', validateRequest, registerUser);
router.put('/:userId', protect, validateRequest, updateUser); // 수정된 방식으로 적용
router.delete('/:id', protect, deleteUser); // 수정된 방식으로 적용

module.exports = router;
