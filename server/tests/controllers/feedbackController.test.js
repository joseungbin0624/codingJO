const { submitFeedback, getAllFeedbacks, getFeedbackById } = require('../../api/v1/controllers/feedbackController');
const feedbackService = require('../../api/v1/services/feedbackService');

jest.mock('../../api/v1/services/feedbackService');

describe('Feedback Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('submitFeedback은 피드백을 제출한다', async () => {
    const mockFeedback = { userId: '1', courseId: '1', content: 'Great course!', rating: 5 };
    req.body = mockFeedback;
    feedbackService.submitFeedback.mockResolvedValue(mockFeedback);

    await submitFeedback(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockFeedback);
  });

  test('getAllFeedbacks는 모든 피드백을 반환한다', async () => {
    const mockFeedbacks = [{ userId: '1', courseId: '1', content: 'Great course!', rating: 5 }];
    feedbackService.getAllFeedbacks.mockResolvedValue(mockFeedbacks);

    await getAllFeedbacks(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockFeedbacks);
  });

  test('getFeedbackById는 ID로 피드백을 검색한다', async () => {
    const mockFeedback = { id: '1', userId: '1', courseId: '1', content: 'Great course!', rating: 5 };
    req.params.id = '1';
    feedbackService.getFeedbackById.mockResolvedValue(mockFeedback);

    await getFeedbackById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockFeedback);
  });
});
