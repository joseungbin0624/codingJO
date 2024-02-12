// E:\project\codingJO\server\migrations\20240212051800-create_course.js

module.exports = {
  async up(db, client) {
    await db.collection('courses').insertMany([
      {
        category: "프로그래밍",
        title: "Node.js 기초",
        description: "Node.js의 기본적인 사용법과 간단한 어플리케이션 만들기",
        instructor: new ObjectId("507f1f77bcf86cd799439011"),
        publishDate: new Date("2024-02-10"),
        tags: ["Node.js", "백엔드", "자바스크립트"],
        level: "beginner",
        price: 30000,
        rating: 4.2,
        imageUrl: "https://example.com/nodejs-basic.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: "데이터 과학",
        title: "파이썬으로 시작하는 데이터 분석",
        description: "데이터 분석의 기초부터 파이썬을 이용한 데이터 처리까지 배워보세요.",
        instructor: new ObjectId("507f1f77bcf86cd799439012"),
        publishDate: new Date("2024-03-15"),
        tags: ["데이터 분석", "파이썬", "데이터 사이언스"],
        level: "intermediate",
        price: 50000,
        rating: 4.8,
        imageUrl: "https://example.com/data-analysis.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 3개 더 추가...
    ]);
  }
  ,

  async down(db, client) {
    await db.collection('courses').deleteMany({});
  }
};
