module.exports = {
  async up(db, client) {
    await db.createCollection('feedbacks', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["userId", "courseId", "content", "rating"],
          properties: {
            userId: {
              bsonType: "objectId",
              description: "must be an objectId and is required"
            },
            courseId: {
              bsonType: "objectId",
              description: "must be an objectId and is required"
            },
            content: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            rating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
              description: "must be an integer in [1, 5] and is required"
            }
          }
        }
      }
    });
  },
  async down(db, client) {
    await db.collection('feedbacks').drop();
  }
};
