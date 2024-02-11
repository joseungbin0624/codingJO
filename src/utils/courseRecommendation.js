// 코스 추천 로직
const { getAllCourses } = require('../../server/api/v1/services/courseService');

// 사용자의 선호도나 이력을 기반으로 코스를 추천하는 함수
async function recommendCourses(userPreferences) {
  const courses = await getAllCourses();
  // 여기서는 단순화를 위해 모든 코스를 반환하지만,
  // 실제로는 userPreferences를 분석하여 맞춤 코스를 추천해야 합니다.
  return courses.filter(course => course.level === userPreferences.level);
}

module.exports = { recommendCourses };
