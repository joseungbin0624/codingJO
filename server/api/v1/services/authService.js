 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const generateToken = (user) => jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

const registerUser = async ({ username, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('이미 사용 중인 이메일입니다.');
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({ username, email, password: hashedPassword });
  const token = generateToken(user);
  const { password: _, ...userWithoutPassword } = user.toObject();
  return { user: userWithoutPassword, token };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('잘못된 이메일 또는 비밀번호입니다.');
  }
  const token = generateToken(user);
  const { password: _, ...userWithoutPassword } = user.toObject();
  return { user: userWithoutPassword, token };
};

const getUserFromToken = async (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) {
    throw new Error('사용자를 찾을 수 없습니다.');
  }
  return user;
};

// 각 기능을 개별적으로 내보냅니다.
exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUserFromToken = getUserFromToken;