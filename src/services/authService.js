import api from '../utils/api';

export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw new Error(error.response?.data?.message || "Login failed. Please try again.");
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw new Error(error.response?.data?.message || "Registration failed. Please try again.");
  }
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const fetchCurrentUser = async () => {
  try {
    const response = await api.get('/auth/user');
    return response.data;
  } catch (error) {
    console.error("Fetch current user error:", error);
    throw new Error("Failed to fetch current user. Please try again.");
  }
};

export const checkUsername = async (username) => {
  try {
    const response = await api.get(`/auth/checkUsername/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error checking username uniqueness", error);
    throw new Error(error.response?.data?.message || "Username check failed. Please try again.");
  }
};
