const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true }, // 포스트의 제목
  content: { type: String, required: true }, // 포스트의 내용
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // 포스트의 작성자
  forum: { type: mongoose.Schema.Types.ObjectId, ref: 'Forum', required: true }, // 이 포스트가 속한 포럼
  comments: [{ // 포스트에 달린 댓글
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
