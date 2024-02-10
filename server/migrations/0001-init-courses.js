 // E:\project\codingJO\server\migrations\0001-init-courses.js
require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('../api/v1/models/Course');

mongoose.connect(process.env.MONGODB_URI)
.then(async () => {
    console.log('Connected to the database');

    const courses = [
      { title: 'Introduction to JavaScript', description: 'Learn the basics of JavaScript', category: 'Programming' },
      { title: 'Advanced Node.js', description: 'Deep dive into Node.js', category: 'Programming' }
    ];

    await Course.insertMany(courses);
    console.log('Courses have been initialized successfully');
    process.exit();
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
    process.exit(1);
  });