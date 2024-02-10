require('dotenv').config(); // 환경 변수 로드
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../api/v1/models/User');
const Course = require('../api/v1/models/Course');
const Event = require('../api/v1/models/Event');
const Feedback = require('../api/v1/models/Feedback');
const Forum = require('../api/v1/models/Forum');
const Notification = require('../api/v1/models/Notification');
const Review = require('../api/v1/models/Review');
// Session 모델 추가 예정

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const seedDatabase = async () => {
  try {
    // 사용자 데이터 삽입
    const hashedPassword = await bcrypt.hash('password123', 10);
    const users = [
      { username: 'JohnDoe', email: 'johndoe@example.com', password: hashedPassword },
      // 추가 사용자 데이터
    ];
    await User.deleteMany({});
    await User.insertMany(users);
    console.log('Users seeded successfully.');

    // Course 데이터 삽입
    const courses = [
      // 코스 데이터
    ];
    await Course.deleteMany({});
    await Course.insertMany(courses);
    console.log('Courses seeded successfully.');

    // Event 데이터 삽입
    const events = [
      // 이벤트 데이터
    ];
    await Event.deleteMany({});
    await Event.insertMany(events);
    console.log('Events seeded successfully.');

    // Feedback 데이터 삽입
    const feedbacks = [
      // 피드백 데이터
    ];
    await Feedback.deleteMany({});
    await Feedback.insertMany(feedbacks);
    console.log('Feedbacks seeded successfully.');

    // Forum 데이터 삽입
    const forums = [
      // 포럼 데이터
    ];
    await Forum.deleteMany({});
    await Forum.insertMany(forums);
    console.log('Forums seeded successfully.');

    // Notification 데이터 삽입
    const notifications = [
      // 알림 데이터
    ];
    await Notification.deleteMany({});
    await Notification.insertMany(notifications);
    console.log('Notifications seeded successfully.');

    // Review 데이터 삽입
    const reviews = [
      // 리뷰 데이터
    ];
    await Review.deleteMany({});
    await Review.insertMany(reviews);
    console.log('Reviews seeded successfully.');

  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await mongoose.disconnect();
  }
};

seedDatabase();
