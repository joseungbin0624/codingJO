import { CREATE_COURSE_SUCCESS, FETCH_COURSES_SUCCESS } from './actionTypes';

const initialState = {
  courses: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
      };
    case CREATE_COURSE_SUCCESS:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    default:
      return state;
  }
};

export default courseReducer;

