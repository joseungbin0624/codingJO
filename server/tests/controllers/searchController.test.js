const { createSearchEntry, getSearchResultsByQuery } = require('../../api/v1/controllers/searchController');
const searchService = require('../../api/v1/services/searchService');

jest.mock('../../api/v1/services/searchService');

describe('Search Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {}, query: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('createSearchEntry는 검색 항목을 생성한다', async () => {
    const mockEntry = { query: 'example', results: ['1', '2'] };
    req.body = mockEntry;
    searchService.createSearchEntry.mockResolvedValue(mockEntry);

    await createSearchEntry(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockEntry);
  });

  test('getSearchResultsByQuery는 쿼리에 대한 검색 결과를 반환한다', async () => {
    const mockResults = ['1', '2'];
    req.params.query = 'example';
    searchService.getSearchResultsByQuery.mockResolvedValue(mockResults);

    await getSearchResultsByQuery(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockResults);
  });
});
