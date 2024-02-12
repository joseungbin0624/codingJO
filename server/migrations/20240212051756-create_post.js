// E:\project\codingJO\server\migrations\20240212051756-create_post.js

module.exports = {
  async up(db, client) {
    await db.collection('posts').insertMany([
      {
        title: "파이썬 프로그래밍 기초",
        content: "파이썬으로 시작하는 프로그래밍 여정",
        author: new ObjectId("507f1f77bcf86cd799439011"),
        forum: new ObjectId("507f1f77bcf86cd799439012"),
        comments: [
          {
            content: "정말 유익한 글이었습니다.",
            author: new ObjectId("507f1f77bcf86cd799439013"),
            createdAt: new Date()
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "자바스크립트 비동기 처리",
        content: "비동기 처리의 이해와 Promise, async/await 사용법",
        author: new ObjectId("507f1f77bcf86cd799439014"),
        forum: new ObjectId("507f1f77bcf86cd799439015"),
        comments: [
          {
            content: "아주 좋은 정보네요. 감사합니다.",
            author: new ObjectId("507f1f77bcf86cd799439016"),
            createdAt: new Date()
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 3개 더 추가...
    ]);
  },

  async down(db, client) {
    await db.collection('posts').deleteMany({});
  }
};
