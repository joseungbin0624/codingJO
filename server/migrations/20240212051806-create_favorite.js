module.exports = {
  async up(db, client) {
    await db.createCollection('favorites', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["user", "courses"],
          properties: {
            user: {
              bsonType: "objectId",
              description: "must be an objectId and is required"
            },
            courses: {
              bsonType: "array",
              items: {
                bsonType: "objectId",
                description: "must be an objectId and is required"
              },
              description: "must be an array of objectIds and is required"
            }
          }
        }
      }
    });
  },
  async down(db, client) {
    await db.collection('favorites').drop();
  }
};
