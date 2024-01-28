const Course = require('../models/Course');

// 코스 검색 및 필터링
exports.searchCourses = async (req, res) => {
  try {
    const { keyword, language, difficulty, status, price } = req.query;

    // 필터링 조건 구성
    let queryConditions = {};

    if (keyword) {
      queryConditions.$or = [
        { title: { $regex: keyword, $options: "i" } }, // 제목에 키워드 포함
        { description: { $regex: keyword, $options: "i" } } // 설명에 키워드 포함
      ];
    }

    if (language) {
      queryConditions.language = language;
    }

    if (difficulty) {
      queryConditions.difficulty = difficulty;
    }

    if (status) {
      queryConditions.status = status;
    }

    if (price) {
      queryConditions.price = { $lte: price }; // 주어진 가격 이하
    }

    const courses = await Course.find(queryConditions);
    res.json(courses);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};


// 코스 상세 정보 조회
exports.getCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);
    res.json(course);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
