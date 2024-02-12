import api from '../utils/api';

const createForum = async (forumData) => {
  const response = await api.post(`/forums`, forumData);
  return response.data;
};

const getAllForums = async () => {
  const response = await api.get(`/forums`);
  return response.data;
};

const getForumById = async (forumId) => {
  const response = await api.get(`/forums/${forumId}`);
  return response.data;
};

export const forumService = {
  createForum,
  getAllForums,
  getForumById
};