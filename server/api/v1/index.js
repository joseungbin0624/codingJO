const express = require('express');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const eventRoutes = require('./routes/eventRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const forumRoutes = require('./routes/forumRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');

const router = express.Router();

// API v1 routes
router.use('/auth', authRoutes);
router.use('/courses', courseRoutes);
router.use('/events', eventRoutes);
router.use('/feedbacks', feedbackRoutes);
router.use('/forums', forumRoutes);
router.use('/notifications', notificationRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;