module.exports = {
  async up(db, client) {
    await db.createCollection('notifications', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["userId", "type", "message"],
          properties: {
            userId: {
              bsonType: "objectId",
              description: "must be an objectId and is required"
            },
            type: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            message: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            isRead: {
              bsonType: "bool",
              description: "must be a boolean"
            },
            link: {
              bsonType: "string",
              description: "must be a string"
            }
          }
        }
      }
    });
  },
  async down(db, client) {
    await db.collection('notifications').drop();
  }
};
