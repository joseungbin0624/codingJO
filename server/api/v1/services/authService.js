// 파일 경로: E:\project\codingJO\server\api\v1\services\authService.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// JWT 토큰 생성 함수
const generateToken = (user) => jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

// 사용자 등록 함수
const registerUser = async ({ username, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('이미 사용 중인 이메일입니다.');
  }
  
  const user = new User({ username, email, password });
  await user.save();
  
  const token = generateToken(user);
  
  return { 
    user: user.toObject({ virtuals: true, versionKey: false }), 
    token 
  };
};

// 사용자 로그인 함수
const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.matchPassword(password))) {
    throw new Error('잘못된 이메일 또는 비밀번호입니다.');
  }
  
  const token = generateToken(user);
  return { 
    user: user.toObject({ virtuals: true, versionKey: false }), 
    token 
  };
};

// 토큰으로부터 사용자 조회 함수
const getUserFromToken = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) {
    throw new Error('사용자를 찾을 수 없습니다.');
  }
  
  return user.toObject({ virtuals: true, versionKey: false });
};

module.exports = { registerUser, loginUser, getUserFromToken };
