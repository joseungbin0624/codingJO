const Course = require('../models/Course');

async function createCourse(courseData) {
  const course = new Course(courseData);
  await course.save();
  return course;
}

async function getAllCourses() {
  return await Course.find({});
}

async function getCourseById(id) {
  const course = await Course.findById(id);
  if (!course) {
    throw new Error('Course not found');
  }
  return course;
}

async function updateCourse(id, updateData) {
  const course = await Course.findByIdAndUpdate(id, updateData, { new: true });
  if (!course) {
    throw new Error('Course not found');
  }
  return course;
}

async function deleteCourse(id) {
  const course = await Course.findByIdAndDelete(id);
  if (!course) {
    throw new Error('Course not found');
  }
  return course;
}

module.exports = { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse };
