require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorHandler');
const authMiddleware = require('./middlewares/authMiddleware');
const courseRoutes = require('./routes/courseRoutes');
const forumRoutes = require('./routes/forumRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// 보안을 위한 Helmet 미들웨어
app.use(helmet());

// CORS 미들웨어
app.use(cors());

// 요청 로깅을 위한 Morgan 미들웨어
app.use(morgan('tiny'));

// JSON 요청 본문 파싱
app.use(express.json());

// 라우팅 설정
// 비인증 라우트
app.use('/api/courses', courseRoutes);
app.use('/api/forum', forumRoutes);
// 인증이 필요한 라우트에 authMiddleware 적용
app.use('/api/users', authMiddleware, userRoutes);

// 오류 처리 미들웨어
app.use(errorHandler);

module.exports = app;
