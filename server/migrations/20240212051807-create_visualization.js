const { ObjectId } = require('mongodb');

module.exports = {
  async up(db, client) {
    await db.collection('visualizations').insertMany([
      {
        title: "데이터 시각화 1",
        description: "이것은 데이터 시각화 예시입니다.",
        data: { chartType: "bar", values: [1, 2, 3, 4, 5] },
        createdBy: new ObjectId("621276e7c719c9e47a1e9941"),
      },
      {
        title: "데이터 시각화 2",
        description: "또 다른 시각화 예시입니다.",
        data: { chartType: "line", values: [5, 3, 4, 2, 1] },
        createdBy: new ObjectId("621276e7c719c9e47a1e9942"),
      },
      {
        title: "데이터 시각화 3",
        description: "복잡한 데이터 시각화 예시입니다.",
        data: { chartType: "pie", values: [25, 25, 25, 25] },
        createdBy: new ObjectId("621276e7c719c9e47a1e9943"),
      },
      {
        title: "데이터 시각화 4",
        description: "사용자 친화적 데이터 시각화 예시입니다.",
        data: { chartType: "doughnut", values: [10, 20, 30, 40] },
        createdBy: new ObjectId("621276e7c719c9e47a1e9944"),
      },
      {
        title: "데이터 시각화 5",
        description: "간단한 데이터 시각화 예시입니다.",
        data: { chartType: "histogram", values: [2, 4, 6, 8, 10] },
        createdBy: new ObjectId("621276e7c719c9e47a1e9945"),
      }
    ]);
  },

  async down(db, client) {
    await db.collection('visualizations').deleteMany({});
  },
};
