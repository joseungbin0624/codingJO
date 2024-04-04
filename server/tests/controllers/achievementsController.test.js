const {
  getAllAchievements,
  getAchievementById,
  createAchievement,
  updateAchievement,
  deleteAchievement,
  getUserAchievements
} = require('../../api/v1/controllers/achievementsController');
const achievementsService = require('../../api/v1/services/achievementsService');

jest.mock('../../api/v1/services/achievementsService');

describe('Achievements Controller - Unit Tests', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis()
    };
  });

  test('getAllAchievements returns all achievements', async () => {
    const mockAchievements = [{ id: '1', name: 'Test Achievement' }];
    achievementsService.getAllAchievements.mockResolvedValue(mockAchievements);

    await getAllAchievements(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockAchievements);
  });

  test('getAchievementById returns an achievement', async () => {
    const mockAchievement = { id: '1', name: 'Test Achievement' };
    req.params.achievementId = '1';
    achievementsService.getAchievementById.mockResolvedValue(mockAchievement);

    await getAchievementById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockAchievement);
  });

  test('createAchievement creates an achievement', async () => {
    const mockAchievement = { name: 'New Achievement' };
    req.body = mockAchievement;
    achievementsService.createAchievement.mockResolvedValue(mockAchievement);

    await createAchievement(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockAchievement);
  });

  test('updateAchievement updates an achievement', async () => {
    const mockAchievement = { id: '1', name: 'Updated Achievement' };
    req.params.achievementId = '1';
    req.body = mockAchievement;
    achievementsService.updateAchievement.mockResolvedValue(mockAchievement);

    await updateAchievement(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockAchievement);
  });

  test('deleteAchievement deletes an achievement', async () => {
    req.params.achievementId = '1';
    achievementsService.deleteAchievement.mockResolvedValue();

    await deleteAchievement(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalled();
  });

  test('getUserAchievements returns achievements for a user', async () => {
    const mockAchievements = [{ id: '1', name: 'User Achievement' }];
    req.params.userId = 'user1';
    achievementsService.getUserAchievements.mockResolvedValue(mockAchievements);

    await getUserAchievements(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockAchievements);
  });
});
