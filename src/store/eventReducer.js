import * as actionTypes from './actionTypes';

const initialState = {
  events: [],
  loading: false,
  error: null,
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
}
