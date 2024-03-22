// File: E:\project\codingJO\server\api\v1\models\Dashboard.js

const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  widgets: [{
    type: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Dashboard', dashboardSchema);
