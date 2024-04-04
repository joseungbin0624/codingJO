const { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } = require('../../api/v1/controllers/courseController');
const courseService = require('../../api/v1/services/courseService');

jest.mock('../../api/v1/services/courseService');

describe('Course Controller - 단위 테스트', () => {
  let req, res;

  beforeEach(() => {
    jest.clearAllMocks();
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('createCourse는 새로운 코스를 생성한다', async () => {
    const mockCourse = { id: '1', title: 'New Course', description: 'Course Description' };
    req.body = mockCourse;
    courseService.createCourse.mockResolvedValue(mockCourse);

    await createCourse(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockCourse);
  });

  test('getAllCourses는 모든 코스를 반환한다', async () => {
    const mockCourses = [{ id: '1', title: 'New Course', description: 'Course Description' }];
    courseService.getAllCourses.mockResolvedValue(mockCourses);

    await getAllCourses(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCourses);
  });

  test('getCourseById는 ID로 코스를 검색한다', async () => {
    const mockCourse = { id: '1', title: 'New Course', description: 'Course Description' };
    req.params.id = '1';
    courseService.getCourseById.mockResolvedValue(mockCourse);

    await getCourseById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCourse);
  });

  test('updateCourse는 코스를 업데이트한다', async () => {
    const mockCourse = { id: '1', title: 'Updated Course', description: 'Updated Description' };
    req.params.id = '1';
    req.body = mockCourse;
    courseService.updateCourse.mockResolvedValue(mockCourse);

    await updateCourse(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCourse);
  });

  test('deleteCourse는 코스를 삭제한다', async () => {
    req.params.id = '1';
    courseService.deleteCourse.mockResolvedValue();

    await deleteCourse(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });
});
