const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Course = require('../../api/v1/models/Course');
const courseService = require('../../api/v1/services/courseService');
const User = require('../../api/v1/models/User');

describe('CourseService Tests', () => {
    let mongoServer;
    let instructorId;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri);
        const instructor = await User.create({ username: 'instructor', email: 'instructor@example.com', password: 'password' });
        instructorId = instructor._id;
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async () => {
        await Course.deleteMany({});
    });

    it('createCourse should create a new course successfully', async () => {
        const courseData = { title: 'New Course', description: 'Course Description', price: 100, category: 'Programming', instructor: instructorId };
        const course = await courseService.createCourse(courseData);
        expect(course.title).toBe(courseData.title);
        expect(course.description).toBe(courseData.description);
        expect(course.category).toBe(courseData.category);
        expect(course.instructor.toString()).toBe(instructorId.toString());
    });

    it('getAllCourses should retrieve all courses', async () => {
        await courseService.createCourse({ title: 'Course 1', description: 'Description 1', price: 100, category: 'Programming', instructor: instructorId });
        await courseService.createCourse({ title: 'Course 2', description: 'Description 2', price: 200, category: 'Data Science', instructor: instructorId });
        const courses = await courseService.getAllCourses();
        expect(courses.length).toBe(2);
    });

    it('getCourseById should retrieve a course by id', async () => {
        const course = await courseService.createCourse({ title: 'New Course', description: 'Course Description', price: 100, category: 'Programming', instructor: instructorId });
        const foundCourse = await courseService.getCourseById(course.id);
        expect(foundCourse.id).toBe(course.id);
    });

    it('updateCourse should update a course', async () => {
        const course = await courseService.createCourse({ title: 'Original Course', description: 'Original Description', price: 100, category: 'Programming', instructor: instructorId });
        const updatedCourse = await courseService.updateCourse(course.id, { title: 'Updated Course', price: 150 });
        expect(updatedCourse.title).toBe('Updated Course');
        expect(updatedCourse.price).toBe(150);
    });

    it('deleteCourse should delete a course', async () => {
        const course = await courseService.createCourse({ title: 'Course to Delete', description: 'Description', price: 100, category: 'Programming', instructor: instructorId });
        await courseService.deleteCourse(course.id);
        const foundCourse = await Course.findById(course.id);
        expect(foundCourse).toBeNull();
    });
});
