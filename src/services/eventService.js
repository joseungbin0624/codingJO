import axios from 'axios';

const API_URL = '/api/v1/events';

const createEvent = async (eventData) => {
  const response = await axios.post(API_URL, eventData);
  return response.data;
};

const getAllEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getEventById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const updateEvent = async (id, eventData) => {
  const response = await axios.put(`${API_URL}/${id}`, eventData);
  return response.data;
};

const deleteEvent = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
