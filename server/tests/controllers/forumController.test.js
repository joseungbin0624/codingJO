const request = require('supertest');
const app = require('../../app');
jest.mock('../../api/v1/services/forumService');
const forumService = require('../../api/v1/services/forumService');

describe('Forum Controller Tests', () => {
  beforeEach(() => {
    forumService.createForum.mockResolvedValue({
      id: 'forumId',
      title: 'Forum Title',
      content: 'Forum Description'
    });
    forumService.getAllForums.mockResolvedValue([{
      id: 'forumId',
      title: 'Forum Title',
      content: 'Forum Description'
    }]);
    forumService.getForumById.mockResolvedValue({
      id: 'forumId',
      title: 'Forum Title',
      content: 'Forum Description'
    });
    forumService.addPostToForum.mockResolvedValue({
      postId: 'postId',
      forumId: 'forumId',
      content: 'Post Content'
    });
  });

  test('Create forum', async () => {
    const forumData = {
      title: 'Forum Title',
      content: 'Forum Description'
    };
    const response = await request(app)
      .post('/api/forum')
      .send(forumData);
    expect(response.statusCode).toBe(201);
    expect(forumService.createForum).toHaveBeenCalledWith(forumData);
  });

  test('Get all forums', async () => {
    const response = await request(app)
      .get('/api/forum');
    expect(response.statusCode).toBe(200);
    expect(forumService.getAllForums).toHaveBeenCalled();
  });

  test('Get forum by ID', async () => {
    const forumId = 'forumId';
    const response = await request(app)
      .get(`/api/forum/${forumId}`);
    expect(response.statusCode).toBe(200);
    expect(forumService.getForumById).toHaveBeenCalledWith(forumId);
  });

  test('Add post to forum', async () => {
    const forumId = 'forumId';
    const postData = { content: 'Post Content' };
    const response = await request(app)
      .post(`/api/forum/${forumId}/posts`)
      .send(postData);
    expect(response.statusCode).toBe(201);
    expect(forumService.addPostToForum).toHaveBeenCalledWith(forumId, postData);
  });
});
