const mongoose = require('mongoose');

const visualizationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    data: {}, // Flexible object, depends on your visualization data structure
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Visualization', visualizationSchema);
