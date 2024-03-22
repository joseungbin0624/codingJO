import api from '../utils/api';

export const getAllCourses = async () => {
  try {
    const response = await api.get('/courses');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch courses: ${error.response?.data?.message || error.message}`);
  }
};

export const getCourseById = async (courseId) => {
  try {
    const response = await api.get(`/courses/${courseId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch course details: ${error.response?.data?.message || error.message}`);
  }
};

export const createCourse = async (courseData) => {
  try {
    const response = await api.post('/courses', courseData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create course: ${error.response?.data?.message || error.message}`);
  }
};
