const { createReview, getCourseReviews } = require('../../api/v1/controllers/reviewController');
const reviewService = require('../../api/v1/services/reviewService');

jest.mock('../../api/v1/services/reviewService');

describe('Review Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('createReview는 리뷰를 생성한다', async () => {
    const mockReview = { userId: '1', targetId: '1', content: 'Great course!', rating: 5 };
    req.body = mockReview;
    reviewService.createReview.mockResolvedValue(mockReview);

    await createReview(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockReview);
  });

  test('getCourseReviews는 코스에 대한 모든 리뷰를 반환한다', async () => {
    const mockReviews = [{ userId: '1', targetId: '1', content: 'Great course!', rating: 5 }];
    req.params.courseId = '1';
    reviewService.getCourseReviews.mockResolvedValue(mockReviews);

    await getCourseReviews(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockReviews);
  });
});

