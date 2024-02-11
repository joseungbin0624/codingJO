import axios from 'axios';

const API_URL = '/api/v1/courses';

const createCourse = async (courseData) => {
  const response = await axios.post(API_URL, courseData);
  return response.data;
};

const getAllCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getCourseById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const updateCourse = async (id, courseData) => {
  const response = await axios.put(`${API_URL}/${id}`, courseData);
  return response.data;
};

const deleteCourse = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};

