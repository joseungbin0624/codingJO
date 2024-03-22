import * as actionTypes from './actionTypes';

const initialState = {
  feedbacks: [],
  loading: false,
  error: null,
};

export default function feedbackReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SUBMIT_FEEDBACK:
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload],
        loading: false,
        error: null
      };
    default:
      return state;
  }
}
