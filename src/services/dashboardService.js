import api from '../utils/api';

export const getUserActivities = async () => {
  try {
    const response = await api.get('/dashboard/activities');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch user activities: ${error.response?.data?.message || error.message}`);
  }
};
