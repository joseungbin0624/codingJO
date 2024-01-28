const mongoose = require('mongoose');

const forumPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // 추가 필드: 댓글, 좋아요, 조회수 등
}, { timestamps: true });

module.exports = mongoose.model('ForumPost', forumPostSchema);
