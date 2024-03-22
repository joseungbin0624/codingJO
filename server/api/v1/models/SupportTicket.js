// File: E:\project\codingJO\server\api\v1\models\SupportTicket.js

const mongoose = require('mongoose');

const supportTicketSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  issue: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['open', 'closed', 'pending'],
    default: 'open'
  },
  resolution: String
}, { timestamps: true });

module.exports = mongoose.model('SupportTicket', supportTicketSchema);
