import { CREATE_COURSE_SUCCESS, FETCH_COURSES_SUCCESS } from './actionTypes';
import axios from 'axios';

const API_URL = '/api/courses';

export const createCourseSuccess = (course) => ({
  type: CREATE_COURSE_SUCCESS,
  payload: course,
});

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

// 비동기 액션 생성자
export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(fetchCoursesSuccess(response.data));
  } catch (error) {
    // 에러 처리
  }
};

export const createCourse = (courseData) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, courseData);
    dispatch(createCourseSuccess(response.data));
  } catch (error) {
    // 에러 처리
  }
};
