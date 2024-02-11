import { CREATE_FORUM_SUCCESS, FETCH_FORUMS_SUCCESS } from './actionTypes';

const initialState = {
  forums: [],
};

const forumReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FORUMS_SUCCESS:
      return {
        ...state,
        forums: action.payload,
      };
    case CREATE_FORUM_SUCCESS:
      return {
        ...state,
        forums: [...state.forums, action.payload],
      };
    default:
      return state;
  }
};

export default forumReducer;
