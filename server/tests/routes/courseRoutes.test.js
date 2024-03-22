const request = require('supertest');
const express = require('express');
const courseRoutes = require('../../api/v1/routes/courseRoutes');
const app = express();
app.use(express.json());
app.use('/api/courses', courseRoutes);

jest.mock('../../api/v1/controllers/courseController');

describe('CourseRoutes', () => {
  it('POST /api/courses/ - should create a course', async () => {
    const response = await request(app)
      .post('/api/courses/')
      .send({
        title: 'New Course',
        description: 'Course Description',
        category: 'Programming',
        instructor: 'InstructorId'
      });

    expect(response.statusCode).toBe(201);
  });

  // Additional tests for GET, PUT, DELETE routes
});
