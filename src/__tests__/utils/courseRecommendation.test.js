import { recommendCourses } from '../../utils/courseRecommendation';

describe('courseRecommendation 함수', () => {
  test('사용자 선호도에 따른 코스 추천', () => {
    const recommendations = recommendCourses({ interests: ['Programming', 'Data Science'] });
    expect(recommendations).toEqual(expect.arrayContaining(['Course 1', 'Course 2', 'Course 3']));
  });
});
