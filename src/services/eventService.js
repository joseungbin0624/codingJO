import api from '../utils/api';

const createEvent = async (eventData) => {
  const response = await api.post('/events', eventData);
  return response.data;
};

const getAllEvents = async () => {
  const response = await api.get('/events');
  return response.data;
};

const getEventById = async (id) => {
  const response = await api.get(`/events/${id}`);
  return response.data;
};

const updateEvent = async (id, updateData) => {
  const response = await api.put(`/events/${id}`, updateData);
  return response.data;
};

const deleteEvent = async (id) => {
  const response = await api.delete(`/events/${id}`);
  return response.data;
};

export const eventService = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent
};