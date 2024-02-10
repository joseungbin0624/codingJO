const authService = require('../services/authService');

async function register(req, res) {
  try {
    const { user, token } = await authService.registerUser(req.body);
    res.status(201).json({ user: user.toJSON(), token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.loginUser(email, password);
    res.status(200).json({ user: user.toJSON(), token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}

module.exports = { register, login };
