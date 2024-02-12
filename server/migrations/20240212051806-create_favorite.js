const { ObjectId } = require('mongodb');

module.exports = {
  async up(db, client) {
    await db.collection('favorites').insertMany([
      {
        user: new ObjectId("621276e7c719c9e47a1e9921"),
        courses: [
          new ObjectId("621276e7c719c9e47a1e9922"),
          new ObjectId("621276e7c719c9e47a1e9923"),
        ],
      },
      {
        user: new ObjectId("621276e7c719c9e47a1e9924"),
        courses: [
          new ObjectId("621276e7c719c9e47a1e9925"),
          new ObjectId("621276e7c719c9e47a1e9926"),
        ],
      },
      {
        user: new ObjectId("621276e7c719c9e47a1e9927"),
        courses: [
          new ObjectId("621276e7c719c9e47a1e9928"),
          new ObjectId("621276e7c719c9e47a1e9929"),
        ],
      },
      {
        user: new ObjectId("621276e7c719c9e47a1e9930"),
        courses: [
          new ObjectId("621276e7c719c9e47a1e9931"),
          new ObjectId("621276e7c719c9e47a1e9932"),
        ],
      },
      {
        user: new ObjectId("621276e7c719c9e47a1e9933"),
        courses: [
          new ObjectId("621276e7c719c9e47a1e9934"),
          new ObjectId("621276e7c719c9e47a1e9935"),
        ],
      }
    ]);
  },

  async down(db, client) {
    await db.collection('favorites').deleteMany({});
  },
};
