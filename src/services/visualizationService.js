import axios from 'axios';

const API_URL = 'http://localhost:5000/api/visualizations/';

// 데이터 시각화 정보 가져오기
const getVisualizationData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 특정 시각화 정보 가져오기
const getVisualizationById = async (visualizationId) => {
  const response = await axios.get(API_URL + `${visualizationId}`);
  return response.data;
};

const visualizationService = {
  getVisualizationData,
  getVisualizationById,
  // 필요한 경우 추가 함수 구현
};

export default visualizationService;

