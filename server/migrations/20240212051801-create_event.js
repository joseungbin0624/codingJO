// E:\project\codingJO\server\migrations\20240212051800-create_course.js

module.exports = {
  async up(db, client) {
    await db.collection('events').insertMany([
      {
        name: "프론트엔드 개발 컨퍼런스",
        organizer: "프론트엔드 개발자 포럼",
        location: "서울, 대한민국",
        startDate: new Date("2024-04-20"),
        endDate: new Date("2024-04-21"),
        description: "최신 프론트엔드 기술 트렌드와 사례 분석",
        attendees: [
          new ObjectId("507f1f77bcf86cd799439011"),
          new ObjectId("507f1f77bcf86cd799439012"),
          // 더 추가 가능
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "데이터 사이언스 워크샵",
        organizer: "데이터 사이언스 아카데미",
        location: "대전, 대한민국",
        startDate: new Date("2024-05-05"),
        endDate: new Date("2024-05-06"),
        description: "데이터 사이언스의 기초부터 심화까지, 실습 중심 워크샵",
        attendees: [
          new ObjectId("507f1f77bcf86cd799439013"),
          new ObjectId("507f1f77bcf86cd799439014"),
          // 더 추가 가능
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 3개 더 추가...
    ]);
  }
  ,

  async down(db, client) {
    await db.collection('event').deleteMany({});
  }
};
