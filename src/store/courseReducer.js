import * as actionTypes from './actionTypes';

const initialState = {
  courses: [],
  loading: false,
  error: null
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false,
        error: null
      };
    // Add more cases as needed
    default:
      return state;
  }
}
