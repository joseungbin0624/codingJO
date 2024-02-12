// E:\project\codingJO\server\migrations\20240212051800-create_course.js

module.exports = {
  async up(db, client) {
    await db.collection('feedbacks').insertMany([
      {
        userId: new ObjectId("507f1f77bcf86cd799439017"),
        courseId: new ObjectId("507f1f77bcf86cd799439018"),
        content: "코스 내용이 알차고 유익했습니다.",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 4개 더 추가...
    ]);
  }
  ,

  async down(db, client) {
    await db.collection('feedback').deleteMany({});
  }
};
