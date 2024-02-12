// E:\project\codingJO\server\migrations\20240212051800-create_course.js

module.exports = {
  async up(db, client) {
    await db.collection('notifications').insertMany([
      {
        userId: new ObjectId("507f1f77bcf86cd799439011"),
        type: "시스템",
        message: "새로운 코스가 등록되었습니다: Node.js 기초",
        isRead: false,
        link: "/courses/nodejs-basic",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: new ObjectId("507f1f77bcf86cd799439012"),
        type: "커뮤니티",
        message: "웹 개발 Q&A 포럼에 새로운 답변이 등록되었습니다.",
        isRead: true,
        link: "/forums/web-dev-qa",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: new ObjectId("507f1f77bcf86cd799439013"),
        type: "프로모션",
        message: "여름방학 특별 할인 이벤트를 확인하세요!",
        isRead: false,
        link: "/promotions/summer-sale",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 2개 더 추가...
    ]);
  },

  async down(db, client) {
    await db.collection('notification').deleteMany({});
  }
};
