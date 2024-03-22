import api from './api';

// Authentication
export const registerUser = async (userData) => {
  return await api.post('/auth/register', userData);
};

export const loginUser = async (loginData) => {
  return await api.post('/auth/login', loginData);
};

// 새로 추가된 토큰으로부터 사용자 정보 조회
export const getUserFromToken = async () => {
  return await api.get('/auth/user-from-token');
};

// Courses
export const createCourse = async (courseData) => {
  return await api.post('/courses', courseData);
};

export const getAllCourses = async () => {
  return await api.get('/courses');
};

export const getCourseById = async (id) => {
  return await api.get(`/courses/${id}`);
};

export const updateCourse = async (id, courseData) => {
  return await api.put(`/courses/${id}`, courseData);
};

export const deleteCourse = async (id) => {
  return await api.delete(`/courses/${id}`);
};

// Events
export const createEvent = async (eventData) => {
  return await api.post('/events', eventData);
};

export const getAllEvents = async () => {
  return await api.get('/events');
};

export const getEventById = async (id) => {
  return await api.get(`/events/${id}`);
};

export const updateEvent = async (id, eventData) => {
  return await api.put(`/events/${id}`, eventData);
};

export const deleteEvent = async (id) => {
  return await api.delete(`/events/${id}`);
};

// Feedback
export const submitFeedback = async (feedbackData) => {
  return await api.post('/feedback', feedbackData);
};

// Forums
export const createForum = async (forumData) => {
  return await api.post('/forums', forumData);
};

export const getAllForums = async () => {
  return await api.get('/forums');
};

export const getForumById = async (forumId) => {
  return await api.get(`/forums/${forumId}`);
};

// 새로 추가된 포럼에 포스트 추가
export const addPostToForum = async (forumId, postData) => {
  return await api.post(`/forums/${forumId}/posts`, postData);
};

// Notifications
export const getUserNotifications = async (userId) => {
  return await api.get(`/notifications/user/${userId}`);
};

// Reviews
export const createReview = async (reviewData) => {
  return await api.post('/reviews', reviewData);
};


// User Management
export const updateUser = async (userId, userData) => {
  return await api.put(`/users/${userId}`, userData);
};

export const deleteUser = async (userId) => {
  return await api.delete(`/users/${userId}`);
};

// Chat
export const createChat = async (chatData) => {
  return await api.post('/chats', chatData);
};

export const addMessageToChat = async (chatId, messageData) => {
  return await api.post(`/chats/${chatId}/messages`, messageData);
};

export const getChatById = async (chatId) => {
  return await api.get(`/chats/${chatId}`);
};

export const getUserChats = async (userId) => {
  return await api.get(`/chats/user/${userId}`);
};

// Favorites
export const addFavorite = async (userId, courseId) => {
  return await api.post('/favorites', { userId, courseId });
};

export const removeFavorite = async (userId, courseId) => {
  return await api.delete(`/favorites/${userId}/${courseId}`);
};

export const getUserFavorites = async (userId) => {
  return await api.get(`/favorites/${userId}`);
};

// Visualizations
export const createVisualization = async (visualizationData) => {
  return await api.post('/visualizations', visualizationData);
};

export const getAllVisualizations = async () => {
  return await api.get('/visualizations');
};

export const getVisualizationById = async (id) => {
  return await api.get(`/visualizations/${id}`);
};
