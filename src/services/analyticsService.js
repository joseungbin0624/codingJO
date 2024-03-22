import api from '../utils/api';

export const getAnalyticsData = async () => {
  try {
    const response = await api.get('/analytics');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch analytics data: ${error.response?.data?.message || error.message}`);
  }
};
