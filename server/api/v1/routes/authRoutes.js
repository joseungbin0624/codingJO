const express = require('express');
const { validateUserRegistration, validateLogin } = require('../validators/userValidator');
const validateRequest = require('../middlewares/validateRequest');
const { register, login, getUserFromToken } = require('../controllers/authenticationController');
const authMiddleware = require('../middlewares/authMiddleware'); // 사용자 인증 미들웨어

const router = express.Router();

// 사용자 등록
router.post('/register', validateUserRegistration, validateRequest, register);

// 사용자 로그인
router.post('/login', validateLogin, validateRequest, login);

// 토큰으로부터 사용자 정보 조회
// 이 라우트에서는 Bearer 토큰을 통해 사용자 인증이 필요하므로 authMiddleware를 사용합니다.
router.get('/user-from-token', authMiddleware, getUserFromToken);

module.exports = router;
