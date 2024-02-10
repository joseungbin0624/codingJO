const userService = require('../services/userService');

async function registerUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const updatedUser = await userService.updateUser(req.params.userId, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json({ message: 'User successfully deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { registerUser, updateUser, deleteUser };
