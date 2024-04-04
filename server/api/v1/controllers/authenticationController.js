// 파일 경로: E:\project\codingJO\server\api\v1\controllers\authenticationController.js
const authService = require('../services/authService');
const User = require('../models/User'); // User 모델 임포트 추가

async function register(req, res) {
  try {
    const { user, token } = await authService.registerUser(req.body);
    res.status(201).json({ user: { _id: user._id, username: user.username, email: user.email }, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.loginUser(email, password);
    res.status(200).json({ user: { _id: user._id, username: user.username, email: user.email }, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

async function getUserFromToken(req, res) {
  try {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
      return res.status(401).json({ message: '토큰이 제공되지 않았습니다.' });
    }

    const token = req.headers.authorization.split(' ')[1];
    const user = await authService.getUserFromToken(token);
    if (!user) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }
    res.status(200).json({ _id: user._id, username: user.username, email: user.email });
  } catch (error) {
    res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
  }
}

// 사용자 이름 중복 검사 함수 추가
async function checkUsername(req, res) {
  const { username } = req.params;
  try {
    // 유효하지 않은 형식의 사용자 이름을 검사하는 로직을 추가할 수 있습니다.
    if (!username || username.length < 3) { // 예시: 사용자 이름의 길이가 3자 미만인 경우
      return res.status(400).json({ message: 'Username is in an invalid format. It must be at least 3 characters.' });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(200).json({ isUnique: false, message: 'Username is already taken.' });
    } else {
      return res.status(200).json({ isUnique: true, message: 'Username is available.' });
    }
  } catch (error) {
    // 서버 오류 메시지를 더 명확하게 제공합니다.
    console.error('Server error during username check:', error);
    return res.status(500).json({ message: 'An error occurred while checking the username. Please try again later.' });
  }
}


module.exports = { register, login, getUserFromToken, checkUsername };
