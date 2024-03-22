require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../api/v1/models/User');
const Course = require('../api/v1/models/Course');
const Event = require('../api/v1/models/Event');
const Chat = require('../api/v1/models/Chat');
const Favorite = require('../api/v1/models/Favorite');
const Feedback = require('../api/v1/models/Feedback');
const Forum = require('../api/v1/models/Forum');
const Notification = require('../api/v1/models/Notification');
const Post = require('../api/v1/models/Post');
const Review = require('../api/v1/models/Review');
const Visualization = require('../api/v1/models/Visualization');

async function seedDatabase() {
  await mongoose.connect(process.env.MONGODB_URI);

  // Optional: Clear existing data
  await User.deleteMany({});
  await Course.deleteMany({});
  await Event.deleteMany({});
  await Chat.deleteMany({});
  await Favorite.deleteMany({});
  await Feedback.deleteMany({});
  await Forum.deleteMany({});
  await Notification.deleteMany({});
  await Post.deleteMany({});
  await Review.deleteMany({});
  await Visualization.deleteMany({});

  // Create sample data for each model
  // Note: For simplicity, this example will not handle relationships between documents or complex scenarios.
  // Users
  const users = await User.insertMany([
    { username: 'JaneDoe', email: 'jane@example.com', password: bcrypt.hashSync('password', 10), isAdmin: false },
    { username: 'JohnDoe', email: 'john@example.com', password: bcrypt.hashSync('password', 10), isAdmin: true }
  ]);

  // Courses
  const courses = await Course.insertMany([
    { category: 'Development', title: 'Learn JavaScript', description: 'JavaScript from scratch', instructor: users[0]._id, price: 50, tags: ['JavaScript', 'Programming'], level: 'beginner' },
    { category: 'Design', title: 'UI/UX Design Fundamentals', description: 'Design principles for UI/UX', instructor: users[1]._id, price: 75, tags: ['Design', 'UI', 'UX'], level: 'intermediate' }
  ]);

  // Events
  const events = await Event.insertMany([
    { name: 'Code Conference', organizer: 'CodeOrg', location: 'Online', startDate: new Date(), endDate: new Date(), description: 'A conference for coders' }
  ]);

  // Chats
  const chats = await Chat.insertMany([
    { participants: [users[0]._id, users[1]._id], messages: [{ sender: users[0]._id, message: 'Hello!' }] }
  ]);

  // Favorites
  const favorites = await Favorite.insertMany([
    { user: users[0]._id, courses: [courses[0]._id] }
  ]);

  // Feedbacks
  const feedbacks = await Feedback.insertMany([
    { userId: users[0]._id, courseId: courses[0]._id, content: 'Great course!', rating: 5 }
  ]);

  // Forums
  const forums = await Forum.insertMany([
    { title: 'JavaScript Discussions', content: 'Talk about everything JavaScript', author: users[0]._id }
  ]);

  // Notifications
  const notifications = await Notification.insertMany([
    { userId: users[0]._id, type: 'Alert', message: 'New Course Available', isRead: false }
  ]);

  // Posts
  const posts = await Post.insertMany([
    { title: 'JavaScript ES6 Features', content: 'Let\'s discuss ES6 features', author: users[0]._id, forum: forums[0]._id }
  ]);

  // Reviews
  const reviews = await Review.insertMany([
    { userId: users[1]._id, targetId: courses[0]._id, content: 'Very informative', rating: 4 }
  ]);

  // Visualizations
  const visualizations = await Visualization.insertMany([
    { title: 'User Engagement', description: 'Monthly user engagement stats', data: { chartType: 'bar', values: [120, 150, 180] }, createdBy: users[0]._id }
  ]);

  console.log('Database seeded successfully');
  await mongoose.disconnect();
}

seedDatabase().catch(err => console.error('Seeding error:', err));
