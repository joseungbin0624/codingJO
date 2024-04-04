const {
  createVisualization,
  getAllVisualizations,
  getVisualizationById,
} = require('../../api/v1/controllers/visualizationController');
const visualizationService = require('../../api/v1/services/visualizationService');

jest.mock('../../api/v1/services/visualizationService');

describe('Visualization Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('createVisualization은 시각화를 생성한다', async () => {
    const mockVisualization = { title: '시각화 제목', description: '설명', data: {} };
    req.body = mockVisualization;
    visualizationService.createVisualization.mockResolvedValue(mockVisualization);

    await createVisualization(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockVisualization);
  });

  test('getAllVisualizations은 모든 시각화를 반환한다', async () => {
    const mockVisualizations = [{ title: '시각화 제목', description: '설명', data: {} }];
    visualizationService.getAllVisualizations.mockResolvedValue(mockVisualizations);

    await getAllVisualizations(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockVisualizations);
  });

  test('getVisualizationById는 ID에 해당하는 시각화를 반환한다', async () => {
    const visualizationId = '1';
    const mockVisualization = { id: visualizationId, title: '시각화 제목', description: '설명', data: {} };
    req.params.id = visualizationId;
    visualizationService.getVisualizationById.mockResolvedValue(mockVisualization);

    await getVisualizationById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockVisualization);
  });
});
