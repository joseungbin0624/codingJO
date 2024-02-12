// apiUtils.js

import api from './api';

export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await api(endpoint, options);
    return response.data;
  } catch (error) {
    // API 호출 실패 시 처리
    console.error('Fetching data failed:', error);
    throw error;
  }
};
