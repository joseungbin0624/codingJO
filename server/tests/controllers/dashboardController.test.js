const { getDashboardByUserId, addWidgetToDashboard, removeWidgetFromDashboard } = require('../../api/v1/controllers/dashboardController');
const dashboardService = require('../../api/v1/services/dashboardService');

jest.mock('../../api/v1/services/dashboardService');

describe('Dashboard Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('getDashboardByUserId는 사용자 ID로 대시보드를 검색한다', async () => {
    const mockDashboard = { userId: '1', widgets: [] };
    req.params.userId = '1';
    dashboardService.getDashboardByUserId.mockResolvedValue(mockDashboard);

    await getDashboardByUserId(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockDashboard);
  });

  test('addWidgetToDashboard는 대시보드에 위젯을 추가한다', async () => {
    const mockDashboard = { userId: '1', widgets: ['widget1'] };
    req.body = { userId: '1', widget: 'widget1' };
    dashboardService.addWidgetToDashboard.mockResolvedValue(mockDashboard);

    await addWidgetToDashboard(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockDashboard);
  });

  test('removeWidgetFromDashboard는 대시보드에서 위젯을 제거한다', async () => {
    const mockDashboard = { userId: '1', widgets: [] };
    req.body = { userId: '1', widget: 'widget1' };
    dashboardService.removeWidgetFromDashboard.mockResolvedValue(mockDashboard);

    await removeWidgetFromDashboard(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockDashboard);
  });
});
