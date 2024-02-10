const jwt = require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Bearer 토큰 확인
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // 토큰이 없을 경우 인증 실패 응답
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    // 토큰 검증
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 유저 정보 조회 (비밀번호 제외)
    req.user = await User.findById(decoded.id).select('-password');
    
    // 다음 미들웨어로 이동
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
});

// 모듈 내보내기 방식 수정
module.exports = protect;
