import { SUBMIT_FEEDBACK_SUCCESS, FETCH_FEEDBACKS_SUCCESS } from './actionTypes';

const initialState = {
  feedbacks: [],
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEEDBACKS_SUCCESS:
      return {
        ...state,
        feedbacks: action.payload,
      };
    case SUBMIT_FEEDBACK_SUCCESS:
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload],
      };
    default:
      return state;
  }
};

export default feedbackReducer;
