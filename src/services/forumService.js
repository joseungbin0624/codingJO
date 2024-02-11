import axios from 'axios';

const API_URL = '/api/v1/forums';

const createForum = async (forumData) => {
  const response = await axios.post(API_URL, forumData);
  return response.data;
};

const getAllForums = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getForumById = async (forumId) => {
  const response = await axios.get(`${API_URL}/${forumId}`);
  return response.data;
};

const addPostToForum = async (forumId, postData) => {
  const response = await axios.post(`${API_URL}/${forumId}/posts`, postData);
  return response.data;
};

export default { createForum, getAllForums, getForumById, addPostToForum };
