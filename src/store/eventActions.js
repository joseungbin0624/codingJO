import * as actionTypes from './actionTypes';
import { getEvents as getEventsService } from '../services/eventService';

export const getEvents = () => async dispatch => {
  try {
    const events = await getEventsService();
    dispatch({
      type: actionTypes.GET_EVENTS,
      payload: events
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    // Handle error
  }
};
