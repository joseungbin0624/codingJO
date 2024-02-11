import { CREATE_EVENT_SUCCESS, FETCH_EVENTS_SUCCESS } from './actionTypes';
import axios from 'axios';

const API_URL = '/api/events';

export const createEventSuccess = (event) => ({
  type: CREATE_EVENT_SUCCESS,
  payload: event,
});

export const fetchEventsSuccess = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events,
});

export const fetchEvents = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch(fetchEventsSuccess(response.data));
  } catch (error) {
    // 에러 처리
  }
};

export const createEvent = (eventData) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, eventData);
    dispatch(createEventSuccess(response.data));
  } catch (error) {
    // 에러 처리
  }
};
