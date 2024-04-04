const express = require('express');
const { validateUserRegistration, validateLogin } = require('../validators/userValidator');
const validateRequest = require('../middlewares/validateRequest');
const { register, login, getUserFromToken, checkUsername } = require('../controllers/authenticationController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', validateUserRegistration, validateRequest, register);
router.post('/login', validateLogin, validateRequest, login);
router.get('/user-from-token', authMiddleware, getUserFromToken);
router.get('/checkUsername/:username', checkUsername); // 사용자 이름 중복 검사 경로 추가

module.exports = router;
