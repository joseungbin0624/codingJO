const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const Course = require('../../api/v1/models/Course');
const User = require('../../api/v1/models/User');

describe('Course Routes Integration Tests', () => {
    let createdCourseId;
    let instructorId;

    beforeEach(async () => {
        // 강사 생성
        const instructor = await User.create({
            username: 'Instructor',
            email: 'instructor@example.com',
            password: 'password',
        });
        instructorId = instructor._id.toString();

        // 새로운 코스 생성
        const newCourse = await Course.create({
            title: 'Test Course',
            description: 'This is a test description',
            category: 'Test Category',
            instructor: instructorId,
            price: 100,
        });
        createdCourseId = newCourse._id.toString();
    });

    afterEach(async () => {
        // 생성된 모든 데이터 삭제
        await Course.deleteMany({});
        await User.deleteMany({});
    });

    it('POST /api/courses creates a new course and returns it', async () => {
        const newCourse = {
            title: 'Another Test Course',
            description: 'This is another test description',
            category: 'Another Test Category',
            instructor: instructorId,
            price: 150,
        };

        const response = await request(app)
            .post('/api/courses')
            .send(newCourse);

        expect(response.statusCode).toBe(201);
        expect(response.body.title).toEqual(newCourse.title);
        expect(response.body.description).toEqual(newCourse.description);
        expect(response.body.category).toEqual(newCourse.category);
        expect(response.body.instructor).toEqual(instructorId);
        expect(response.body.price).toEqual(newCourse.price);
    });

    it('GET /api/courses/:id retrieves a specific course by ID', async () => {
        const response = await request(app).get(`/api/courses/${createdCourseId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body._id).toEqual(createdCourseId);
    });

    it('PUT /api/courses/:id updates a course info', async () => {
        const updatedCourse = {
            title: 'Updated Course Title',
            description: 'Updated Description',
            category: 'Test Category', // 필수 필드 추가
            instructor: instructorId, // 필수 필드 추가
            price: 150,
        };

        const response = await request(app)
            .put(`/api/courses/${createdCourseId}`)
            .send(updatedCourse);

        expect(response.statusCode).toBe(200); // 여기서 400 에러가 발생했었음
        expect(response.body.title).toEqual(updatedCourse.title);
        expect(response.body.description).toEqual(updatedCourse.description);
        expect(response.body.category).toEqual(updatedCourse.category); // 검증 추가
        expect(response.body.instructor).toEqual(instructorId); // 검증 추가
        expect(response.body.price).toEqual(updatedCourse.price);
    });

    it('DELETE /api/courses/:id deletes a course', async () => {
        const response = await request(app).delete(`/api/courses/${createdCourseId}`);
        expect(response.statusCode).toBe(204);
    });
});
