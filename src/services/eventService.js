import api from '../utils/api';
import { formatEventDate, calculateEventStatus } from '../utils/eventUtils';

export const getAllEvents = async () => {
  try {
    const response = await api.get('/events');
    const events = response.data.map(event => ({
      ...event,
      formattedDate: formatEventDate(new Date(event.date)),
      status: calculateEventStatus(new Date(event.startDate), new Date(event.endDate))
    }));
    return events;
  } catch (error) {
    throw new Error(`Failed to fetch events: ${error.response?.data?.message || error.message}`);
  }
};

export const getEventById = async (eventId) => {
  try {
    const response = await api.get(`/events/${eventId}`);
    const event = {
      ...response.data,
      formattedDate: formatEventDate(new Date(response.data.date)),
      status: calculateEventStatus(new Date(response.data.startDate), new Date(response.data.endDate))
    };
    return event;
  } catch (error) {
    throw new Error(`Failed to fetch event details: ${error.response?.data?.message || error.message}`);
  }
};
