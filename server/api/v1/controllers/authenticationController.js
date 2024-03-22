const authService = require('../services/authService');

async function register(req, res) {
  try {
    const { user, token } = await authService.registerUser(req.body);
    res.status(201).json({ user: { id: user.id, username: user.username, email: user.email }, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.loginUser(email, password);
    res.status(200).json({ user: { id: user.id, username: user.username, email: user.email }, token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

async function getUserFromToken(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const user = await authService.getUserFromToken(token);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
  }
}

module.exports = { register, login, getUserFromToken };
