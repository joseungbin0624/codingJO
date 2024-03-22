const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Course = require('../../api/v1/models/Course');
const User = require('../../api/v1/models/User');

describe('Course Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('Course 저장 및 검증', async () => {
    const instructor = new User({ username: 'instructor', email: 'instructor@example.com', password: 'password123' });
    await instructor.save();

    const course = new Course({
      title: "Node.js 기초",
      description: "Node.js에 대한 기초적인 내용을 다룹니다.",
      category: "프로그래밍",
      instructor: instructor._id,
      price: 100,
    });

    const savedCourse = await course.save();
    expect(savedCourse.title).toEqual("Node.js 기초");
    expect(savedCourse.instructor).toEqual(instructor._id);
  });
});
