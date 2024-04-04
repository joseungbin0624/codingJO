const { addFavorite, removeFavorite, getUserFavorites } = require('../../api/v1/controllers/favoritesController');
const favoritesService = require('../../api/v1/services/favoritesService');

jest.mock('../../api/v1/services/favoritesService');

describe('Favorites Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('addFavorite는 즐겨찾기에 코스를 추가한다', async () => {
    const mockFavorite = { userId: '1', courseId: '1' };
    req.body = mockFavorite;
    favoritesService.addFavorite.mockResolvedValue(mockFavorite);

    await addFavorite(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockFavorite);
  });

  test('removeFavorite는 즐겨찾기에서 코스를 제거한다', async () => {
    req.params = { userId: '1', courseId: '1' };
    favoritesService.removeFavorite.mockResolvedValue(true);

    await removeFavorite(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(favoritesService.removeFavorite).toHaveBeenCalledWith('1', '1');
  });

  test('getUserFavorites는 사용자의 모든 즐겨찾기를 반환한다', async () => {
    const mockFavorites = [{ userId: '1', courseId: '1' }];
    req.params.userId = '1';
    favoritesService.getUserFavorites.mockResolvedValue(mockFavorites);

    await getUserFavorites(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockFavorites);
  });
});
