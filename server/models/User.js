const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  // 추가 필드: 프로필 사진, 소개, 관심 분야 등
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
