import * as actionTypes from './actionTypes';
import { getCourses as getCoursesService } from '../services/courseService';

export const getCourses = () => async dispatch => {
  try {
    const courses = await getCoursesService();
    dispatch({
      type: actionTypes.GET_COURSES,
      payload: courses
    });
  } catch (error) {
    console.error('Error fetching courses:', error);
    // Handle error
  }
};
