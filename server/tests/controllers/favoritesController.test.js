const request = require('supertest');
const express = require('express');
const favoritesController = require('../../api/v1/controllers/favoritesController');
const favoritesService = require('../../api/v1/services/favoritesService');
jest.mock('../../api/v1/services/favoritesService');

const app = express();
app.use(express.json());

app.post('/favorites', favoritesController.addFavorite);
app.delete('/favorites/:userId/:courseId', favoritesController.removeFavorite);
app.get('/favorites/:userId', favoritesController.getUserFavorites);

describe('Favorites Controller Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('addFavorite: Should add a course to favorites and return status 201', async () => {
    const mockFavorite = { userId: '1', courseId: '2' };
    favoritesService.addFavorite.mockResolvedValue(mockFavorite);

    const response = await request(app)
      .post('/favorites')
      .send(mockFavorite);

    expect(response.statusCode).toBe(201);
    expect(favoritesService.addFavorite).toHaveBeenCalledWith(mockFavorite.userId, mockFavorite.courseId);
  });

  test('removeFavorite: Should remove a course from favorites and return status 200', async () => {
    const userId = '1';
    const courseId = '2';
    favoritesService.removeFavorite.mockResolvedValue(true);

    const response = await request(app).delete(`/favorites/${userId}/${courseId}`);

    expect(response.statusCode).toBe(200);
    expect(favoritesService.removeFavorite).toHaveBeenCalledWith(userId, courseId);
  });

  test('getUserFavorites: Should return favorites for a user and status 200', async () => {
    const userId = '1';
    const mockFavorites = [{ userId, courseId: '2' }];
    favoritesService.getUserFavorites.mockResolvedValue(mockFavorites);

    const response = await request(app).get(`/favorites/${userId}`);

    expect(response.statusCode).toBe(200);
    expect(favoritesService.getUserFavorites).toHaveBeenCalledWith(userId);
  });
});
