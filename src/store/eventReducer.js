import { CREATE_EVENT_SUCCESS, FETCH_EVENTS_SUCCESS } from './actionTypes';

const initialState = {
  events: [],
};

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    default:
      return state;
  }
};

export default eventReducer;
