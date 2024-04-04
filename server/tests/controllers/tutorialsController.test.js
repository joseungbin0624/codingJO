const {
  createTutorial,
  getAllTutorials,
  getTutorialById,
  updateTutorial,
  deleteTutorial,
  getTutorialsByTags,
} = require('../../api/v1/controllers/tutorialsController');
const tutorialsService = require('../../api/v1/services/tutorialsService');

jest.mock('../../api/v1/services/tutorialsService');

describe('Tutorials Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {}, query: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis()
    };
  });

  // 각 함수에 대한 테스트 케이스를 작성합니다.
  test('createTutorial은 튜토리얼을 생성한다', async () => {
    const mockTutorial = { title: '새 튜토리얼', description: '내용', tags: ['tag1'] };
    req.body = mockTutorial;
    tutorialsService.createTutorial.mockResolvedValue(mockTutorial);

    await createTutorial(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockTutorial);
  });

  test('getAllTutorials은 모든 튜토리얼을 반환한다', async () => {
    const mockTutorials = [{ title: '튜토리얼 1', description: '내용', tags: ['tag1'] }];
    tutorialsService.getAllTutorials.mockResolvedValue(mockTutorials);

    await getAllTutorials(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTutorials);
  });

  test('getTutorialById는 ID에 해당하는 튜토리얼을 반환한다', async () => {
    const tutorialId = '1';
    const mockTutorial = { id: tutorialId, title: '튜토리얼 1', description: '내용', tags: ['tag1'] };
    req.params.id = tutorialId;
    tutorialsService.getTutorialById.mockResolvedValue(mockTutorial);

    await getTutorialById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTutorial);
  });

  test('updateTutorial은 튜토리얼을 업데이트한다', async () => {
    const tutorialId = '1';
    const mockTutorial = { id: tutorialId, title: '업데이트된 튜토리얼', description: '업데이트된 내용', tags: ['tag1', 'tag2'] };
    req.params.id = tutorialId;
    req.body = mockTutorial;
    tutorialsService.updateTutorial.mockResolvedValue(mockTutorial);

    await updateTutorial(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTutorial);
  });

  test('deleteTutorial은 튜토리얼을 삭제한다', async () => {
    const tutorialId = '1';
    req.params.id = tutorialId;
    tutorialsService.deleteTutorial.mockResolvedValue({});

    await deleteTutorial(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('getTutorialsByTags는 태그에 따른 튜토리얼을 반환한다', async () => {
    const mockTutorials = [{ title: '튜토리얼 1', description: '내용', tags: ['tag1', 'tag2'] }];
    req.query.tags = 'tag1,tag2';
    tutorialsService.getTutorialsByTags.mockResolvedValue(mockTutorials);

    await getTutorialsByTags(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTutorials);
  });
});
