const express = require('express');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const eventRoutes = require('./routes/eventRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const forumRoutes = require('./routes/forumRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes');
const favoritesRoutes = require('./routes/favoritesRoutes');
const visualizationRoutes = require('./routes/visualizationRoutes');
const achievementsRoutes = require('./routes/achievementsRoutes'); // Newly added
const analyticsRoutes = require('./routes/analyticsRoutes'); // Newly added
const dashboardRoutes = require('./routes/dashboardRoutes'); // Newly added
const searchRoutes = require('./routes/searchRoutes'); // Newly added
const supportRoutes = require('./routes/supportRoutes'); // Newly added
const tutorialsRoutes = require('./routes/tutorialsRoutes'); // Newly added

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
router.use('/chats', chatRoutes);
router.use('/favorites', favoritesRoutes);
router.use('/visualizations', visualizationRoutes);
router.use('/achievements', achievementsRoutes); // Hooking up the newly added route
router.use('/analytics', analyticsRoutes); // Hooking up the newly added route
router.use('/dashboard', dashboardRoutes); // Hooking up the newly added route
router.use('/search', searchRoutes); // Hooking up the newly added route
router.use('/support', supportRoutes); // Hooking up the newly added route
router.use('/tutorials', tutorialsRoutes); // Hooking up the newly added route

module.exports = router;
