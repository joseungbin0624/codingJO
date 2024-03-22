const express = require('express');
const connectDatabase = require('./config/database');
const serverConfig = require('./config/serverConfig');
const errorHandler = require('./api/v1/middlewares/errorHandler');

// 기존 라우트
const courseRoutes = require('./api/v1/routes/courseRoutes');
const forumRoutes = require('./api/v1/routes/forumRoutes');
const userRoutes = require('./api/v1/routes/userRoutes');
const authRoutes = require('./api/v1/routes/authRoutes');
const chatRoutes = require('./api/v1/routes/chatRoutes');
const eventRoutes = require('./api/v1/routes/eventRoutes');
const favoritesRoutes = require('./api/v1/routes/favoritesRoutes');
const feedbackRoutes = require('./api/v1/routes/feedbackRoutes');
const notificationRoutes = require('./api/v1/routes/notificationRoutes');
const reviewRoutes = require('./api/v1/routes/reviewRoutes');
const visualizationRoutes = require('./api/v1/routes/visualizationRoutes');

// 추가된 라우트
const achievementsRoutes = require('./api/v1/routes/achievementsRoutes');
const analyticsRoutes = require('./api/v1/routes/analyticsRoutes');
const dashboardRoutes = require('./api/v1/routes/dashboardRoutes');
const searchRoutes = require('./api/v1/routes/searchRoutes');
const supportRoutes = require('./api/v1/routes/supportRoutes');
const tutorialsRoutes = require('./api/v1/routes/tutorialsRoutes');

const app = express();
serverConfig(app); // Apply server configurations

connectDatabase(); // Connect to database

// 기존 라우트 사용 등록
app.use('/api/courses', courseRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/visualizations', visualizationRoutes);

// 추가된 라우트 사용 등록
app.use('/api/achievements', achievementsRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/tutorials', tutorialsRoutes);

app.use(errorHandler); // Error handling middleware

module.exports = app;
