import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events/';

const getEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getEventById = async (eventId) => {
  const response = await axios.get(API_URL + eventId);
  return response.data;
};

const createEvent = async (eventData) => {
  const response = await axios.post(API_URL, eventData);
  return response.data;
};

const updateEvent = async (eventId, eventData) => {
  const response = await axios.put(API_URL + eventId, eventData);
  return response.data;
};

const deleteEvent = async (eventId) => {
  const response = await axios.delete(API_URL + eventId);
  return response.data;
};

const eventService = {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};

export default eventService;

