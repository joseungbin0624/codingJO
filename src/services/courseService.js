import axios from 'axios';

const API_URL = 'http://localhost:5000/api/courses/';

const getCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getCourseById = async (id) => {
  const response = await axios.get(API_URL + id);
  return response.data;
};

const courseService = {
  getCourses,
  getCourseById,
  // 다른 코스 관련 메서드 추가 가능
};

export default courseService;
