// E:\project\codingJO\server\app.js
const express = require('express');
const connectDatabase = require('./config/database');
const serverConfig = require('./config/serverConfig');
const errorHandler = require('./api/v1/middlewares/errorHandler');

// 라우트 파일들을 require함
const courseRoutes = require('./api/v1/routes/courseRoutes');
const forumRoutes = require('./api/v1/routes/forumRoutes'); // Forum Routes
const userRoutes = require('./api/v1/routes/userRoutes');
const authRoutes = require('./api/v1/routes/authRoutes');
const chatRoutes = require('./api/v1/routes/chatRoutes');
const eventRoutes = require('./api/v1/routes/eventRoutes');
const favoritesRoutes = require('./api/v1/routes/favoritesRoutes');
const feedbackRoutes = require('./api/v1/routes/feedbackRoutes');
const notificationRoutes = require('./api/v1/routes/notificationRoutes');
const reviewRoutes = require('./api/v1/routes/reviewRoutes');
const visualizationRoutes = require('./api/v1/routes/visualizationRoutes');
const achievementsRoutes = require('./api/v1/routes/achievementsRoutes');
const analyticsRoutes = require('./api/v1/routes/analyticsRoutes');
const dashboardRoutes = require('./api/v1/routes/dashboardRoutes');
const searchRoutes = require('./api/v1/routes/searchRoutes');
const supportRoutes = require('./api/v1/routes/supportRoutes');
const tutorialsRoutes = require('./api/v1/routes/tutorialsRoutes');

const app = express();

// 서버 설정을 적용합니다.
serverConfig(app);

// 데이터베이스에 연결합니다.
connectDatabase().then(() => {
  console.log('Database connected successfully.');
}).catch((error) => {
  console.error('Database connection failed:', error);
  process.exit(1);
});

// 라우트 사용 등록
app.use('/api/courses', courseRoutes);
app.use('/api/forums', forumRoutes); // 변경된 부분: '/api/forum'에서 '/api/forums'로 수정
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/visualizations', visualizationRoutes);
app.use('/api/achievements', achievementsRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/tutorials', tutorialsRoutes);

// 오류 처리 미들웨어를 사용합니다.
app.use(errorHandler);

module.exports = app;
