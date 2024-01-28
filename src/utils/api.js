import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchPosts = () => {
  return apiClient.get('/posts');
};

export const createPost = (postData) => {
  return apiClient.post('/posts', postData);
};

export const deletePost = (postId) => {
  return apiClient.delete(`/posts/${postId}`);
};

