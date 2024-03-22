const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // bcrypt 대신 bcryptjs 사용할 수 있음, 더 나은 호환성 제공

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
  isAdmin: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

// 비밀번호 해싱 미들웨어
userSchema.pre('save', async function(next) {
  // 이 문서의 비밀번호 필드가 변경되었거나 새로운 문서일 때만 해싱 실행
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(10); // 솔트 생성, 기본값은 10
    this.password = await bcrypt.hash(this.password, salt); // 비밀번호 해싱
  }

  next();
});

// 비밀번호 검증 메서드 추가
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
