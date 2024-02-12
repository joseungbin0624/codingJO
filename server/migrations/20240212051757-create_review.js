// E:\project\codingJO\server\migrations\20240212051757-create_review.js

module.exports = {
  async up(db, client) {
    // 리뷰 초기 데이터 삽입
    await db.collection('reviews').insertMany([
      {
        userId: new ObjectId(),
        targetId: new ObjectId(),
        content: "정말 유익한 코스였습니다.",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 나머지 4개 데이터 추가...
    ]);
  }
  ,

  async down(db, client) {
    await db.collection('reviews').deleteMany({});
  }
};
