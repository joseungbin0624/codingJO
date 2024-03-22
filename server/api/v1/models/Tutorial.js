// File: E:\project\codingJO\server\api\v1\models\Tutorial.js

const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
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
  tags: [String]
}, { timestamps: true });

module.exports = mongoose.model('Tutorial', tutorialSchema);
