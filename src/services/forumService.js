// 파일 경로: E:\project\codingJO\src\services\forumService.js
import api from '../utils/api';

export const getAllForums = async () => {
  try {
    const response = await api.get('/forums');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch forums: ${error.message}`);
  }
};

export const getForumById = async (forumId) => {
  try {
    const response = await api.get(`/forums/${forumId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch forum details: ${error.message}`);
  }
};

export const createForum = async (forumData) => {
  try {
    const response = await api.post('/forums', forumData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create forum: ${error.message}`);
  }
};

export const addPostToForum = async (forumId, postData) => {
  try {
    const response = await api.post(`/forums/${forumId}/posts`, postData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to add post to forum: ${error.message}`);
  }
};
