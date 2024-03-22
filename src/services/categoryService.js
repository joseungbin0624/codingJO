import api from '../utils/api';

export const getCategories = async () => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error.response?.data?.message || error.message}`);
  }
};
