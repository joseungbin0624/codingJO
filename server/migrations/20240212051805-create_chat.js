// E:\project\codingJO\server\migrations\20240212051800-create_course.js

module.exports = {
  async up(db, client) {
    await db.collection('chats').insertMany([
      {
        participants: [new ObjectId("507f1f77bcf86cd799439011"), new ObjectId("507f1f77bcf86cd799439012")],
        messages: [
          {
            sender: new ObjectId("507f1f77bcf86cd799439011"),
            message: "안녕하세요, 프로젝트 관련해서 질문이 있어서 연락드렸습니다.",
            timestamp: new Date()
          },
          {
            sender: new ObjectId("507f1f77bcf86cd799439012"),
            message: "네, 어떤 부분이 궁금하신가요?",
            timestamp: new Date()
          },
          // 더 추가 가능...
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 4개 더 추가...
    ]);
  },

  async down(db, client) {
    await db.collection('chat').deleteMany({});
  }
};
