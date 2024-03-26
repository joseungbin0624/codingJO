// E:\project\codingJO\src\services\courseService.js 파일에 추가

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

// 여기에 getCourseDetails 함수를 추가합니다.
export const getCourseDetails = async (courseId) => {
  // 이미 존재하는 getCourseById 함수와 동일한 기능을 할 것입니다.
  // 이 함수를 추가하는 것은, 요청에 따른 것으로, 실제로는 getCourseById 함수를 사용해도 됩니다.
  try {
    const response = await api.get(`/courses/${courseId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch course details: ${error.response?.data?.message || error.message}`);
  }
};
