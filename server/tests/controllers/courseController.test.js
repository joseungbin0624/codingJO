const request = require('supertest');
const app = require('../../app'); // 실제 경로에 따라 수정해야 할 수 있습니다.
const { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } = require('../../api/v1/controllers/courseController');
const Course = require('../../api/v1/models/Course'); // 모델 경로는 실제 경로에 맞게 조정
jest.mock('../../api/v1/models/Course');

beforeEach(() => {
  // 모의 함수 초기화
  Course.create.mockClear();
  Course.find.mockClear();
  Course.findById.mockClear();
  Course.findByIdAndUpdate.mockClear();
  Course.findByIdAndDelete.mockClear();
});

describe('Course Controller Tests', () => {
  test('Create a new course', async () => {
    const newCourse = {
      category: 'Web Development',
      title: 'Intro to JavaScript',
      description: 'An introductory course on JavaScript',
      instructor: '603f9c5eb3db2b421a7b45d2', // 예시 ObjectId, 실제 테스트에서는 유효한 값 사용
      price: 100,
      imageUrl: 'https://example.com/image.jpg',
    };

    Course.create.mockResolvedValue(newCourse);

    const response = await request(app)
      .post('/api/courses')
      .send(newCourse);
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('title', newCourse.title);
    expect(Course.create).toHaveBeenCalledWith(newCourse);
  });

  // getAllCourses 테스트
  test('Get all courses', async () => {
    Course.find.mockResolvedValue([]);

    const response = await request(app).get('/api/courses');
    
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(Course.find).toHaveBeenCalled();
  });

  // getCourseById 테스트
  test('Get a course by ID', async () => {
    const courseId = '603f9c5eb3db2b421a7b45d2'; // 예시 ObjectId
    const course = {
      _id: courseId,
      title: 'Intro to JavaScript',
      description: 'An introductory course on JavaScript',
    };

    Course.findById.mockResolvedValue(course);

    const response = await request(app).get(`/api/courses/${courseId}`);
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('_id', courseId);
    expect(Course.findById).toHaveBeenCalledWith(courseId);
  });

  // updateCourse 테스트
  test('Update a course', async () => {
    const courseId = '603f9c5eb3db2b421a7b45d2'; // 예시 ObjectId
    const courseUpdates = {
      title: 'Intro to JavaScript - Updated',
    };

    Course.findByIdAndUpdate.mockResolvedValue({
      ...courseUpdates,
      _id: courseId,
    });

    const response = await request(app)
      .put(`/api/courses/${courseId}`)
      .send(courseUpdates);
    
    expect(response.statusCode).toBe(200);
    expect(Course.findByIdAndUpdate).toHaveBeenCalledWith(courseId, courseUpdates, { new: true });
  });

  // deleteCourse 테스트
  test('Delete a course', async () => {
    const courseId = '603f9c5eb3db2b421a7b45d2'; // 예시 ObjectId

    Course.findByIdAndDelete.mockResolvedValue(true);

    const response = await request(app).delete(`/api/courses/${courseId}`);
    
    expect(response.statusCode).toBe(204);
    expect(Course.findByIdAndDelete).toHaveBeenCalledWith(courseId);
  });
});
