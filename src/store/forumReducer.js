import * as actionTypes from './actionTypes';

const initialState = {
  forums: [],
  selectedForum: null,
  loading: false,
  error: null,
};

export default function forumReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_FORUMS:
      return {
        ...state,
        forums: action.payload,
        loading: false,
        error: null
      };
    case actionTypes.SELECT_FORUM:
      return {
        ...state,
        selectedForum: action.payload,
      };
    default:
      return state;
  }
}
