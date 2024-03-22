import api from '../utils/api';

export const createVisualization = async (visualizationData) => {
  try {
    const response = await api.post('/visualizations', visualizationData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to create visualization: ${error.response?.data?.message || error.message}`);
  }
};

export const getAllVisualizations = async () => {
  try {
    const response = await api.get('/visualizations');
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch visualizations: ${error.response?.data?.message || error.message}`);
  }
};

export const getVisualizationById = async (id) => {
  try {
    const response = await api.get(`/visualizations/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch visualization by ID: ${error.response?.data?.message || error.message}`);
  }
};

export const updateVisualization = async (id, visualizationData) => {
  try {
    const response = await api.put(`/visualizations/${id}`, visualizationData);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to update visualization: ${error.response?.data?.message || error.message}`);
  }
};

export const deleteVisualization = async (id) => {
  try {
    await api.delete(`/visualizations/${id}`);
    return { message: 'Visualization deleted successfully' };
  } catch (error) {
    throw new Error(`Failed to delete visualization: ${error.response?.data?.message || error.message}`);
  }
};
