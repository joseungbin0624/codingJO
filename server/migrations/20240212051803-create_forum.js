// E:\project\codingJO\server\migrations\20240212051800-create_course.js

module.exports = {
  async up(db, client) {
    await db.collection('forums').insertMany([
      {
        title: "웹 개발 Q&A",
        content: "웹 개발에 관한 질문과 답변을 공유하는 공간입니다.",
        author: new ObjectId("507f1f77bcf86cd799439011"),
        replies: [
          {
            content: "웹 표준에 대해서 더 알고 싶어요!",
            author: new ObjectId("507f1f77bcf86cd799439012"),
            createdAt: new Date()
          },
          // 더 추가 가능
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "인공지능 최신 동향",
        content: "인공지능 기술과 관련된 최신 뉴스와 연구 결과를 공유합니다.",
        author: new ObjectId("507f1f77bcf86cd799439013"),
        replies: [
          {
            content: "딥러닝 모델의 최적화 기법에 대해 알고 싶습니다.",
            author: new ObjectId("507f1f77bcf86cd799439014"),
            createdAt: new Date()
          },
          // 더 추가 가능
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 3개 더 추가...
    ]);
  },

  async down(db, client) {
    await db.collection('forum').deleteMany({});
  }
};
