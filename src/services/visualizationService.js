import api from '../utils/api';

const createVisualization = async (visualizationData) => {
  const response = await api.post('/visualizations', visualizationData);
  return response.data;
};

const getAllVisualizations = async () => {
  const response = await api.get('/visualizations');
  return response.data;
};

const getVisualizationById = async (id) => {
  const response = await api.get(`/visualizations/${id}`);
  return response.data;
};

export const visualizationService = {
  createVisualization,
  getAllVisualizations,
  getVisualizationById,
};