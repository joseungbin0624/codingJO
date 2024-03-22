import api from '../utils/api';

export const performSearch = async (query) => {
  try {
    const response = await api.get(`/search?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    throw new Error(`Search failed: ${error.response?.data?.message || error.message}`);
  }
};
