import api from '../utils/api';

const createCourse = async (courseData) => {
  const response = await api.post('/courses', courseData);
  return response.data;
};

const getAllCourses = async () => {
  const response = await api.get('/courses');
  return response.data;
};

const getCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

const updateCourse = async (id, updateData) => {
  const response = await api.put(`/courses/${id}`, updateData);
  return response.data;
};

const deleteCourse = async (id) => {
  const response = await api.delete(`/courses/${id}`);
  return response.data;
};

export const courseService = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};

