const forumController = require('../../api/v1/controllers/forumController');
const forumService = require('../../api/v1/services/forumService');

jest.mock('../../api/v1/services/forumService');

describe('Forum Controller - Unit Tests', () => {
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

    test('createForum creates a forum', async () => {
        const mockForum = { id: '1', title: 'Forum Title', content: 'Forum Content' };
        req.body = mockForum;
        forumService.createForum.mockResolvedValue(mockForum);

        await forumController.createForum(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockForum);
    });

    test('getAllForums returns all forums', async () => {
        const mockForums = [{ id: '1', title: 'Forum Title', content: 'Forum Content' }];
        forumService.getAllForums.mockResolvedValue(mockForums);

        await forumController.getAllForums(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockForums);
    });

    test('getForumById returns a forum by id', async () => {
        const forumId = '1';
        const mockForum = { id: forumId, title: 'Forum Title', content: 'Forum Content' };
        req.params.id = forumId;
        forumService.getForumById.mockResolvedValue(mockForum);

        await forumController.getForumById(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockForum);
    });

    test('addPostToForum adds a post to a forum', async () => {
        const forumId = '1';
        const mockPost = { content: 'Post Content' };
        req.params.id = forumId; // req.params.id로 올바르게 수정
        req.body = mockPost;
        forumService.addPostToForum.mockResolvedValue({
            ...mockPost,
            forumId: forumId,
        });

        await forumController.addPostToForum(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        // 함수 호출 검증 시 req.params.id 사용을 반영
        expect(forumService.addPostToForum).toHaveBeenCalledWith(forumId, mockPost);
    });
});
