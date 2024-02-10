const express = require('express');
const connectDatabase = require('./config/database');
const serverConfig = require('./config/serverConfig');
const errorHandler = require('./api/v1/middlewares/errorHandler');
const courseRoutes = require('./api/v1/routes/courseRoutes');
const forumRoutes = require('./api/v1/routes/forumRoutes');
const userRoutes = require('./api/v1/routes/userRoutes');

const app = express();
serverConfig(app);  // Apply server configurations

connectDatabase();  // Connect to database

// Define routes
app.use('/api/courses', courseRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);  // Error handling middleware

module.exports = app;
