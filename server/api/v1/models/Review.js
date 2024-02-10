const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  targetId: { type: mongoose.Schema.Types.ObjectId, required: true }, // 코스 또는 이벤트 ID
  content: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
