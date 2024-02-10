const User = require('../models/User');

async function createUser(userData) {
  const newUser = new User(userData);
  await newUser.save();
  return newUser;
}

async function updateUser(userId, updateData) {
  const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
  if (!user) {
    throw new Error('사용자를 찾을 수 없습니다.');
  }
  return user;
}

async function deleteUser(userId) {
  await User.findByIdAndDelete(userId);
}

module.exports = { createUser, updateUser, deleteUser };
