module.exports = {
  async up(db, client) {
    await db.createCollection('chats', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          properties: {
            participants: {
              bsonType: "array",
              items: {
                bsonType: "objectId",
                description: "must be an objectId and is required"
              },
              description: "must be an array of objectIds and is required"
            },
            messages: {
              bsonType: "array",
              items: {
                bsonType: "object",
                required: ["sender", "message", "timestamp"],
                properties: {
                  sender: {
                    bsonType: "objectId",
                    description: "must be an objectId and is required"
                  },
                  message: {
                    bsonType: "string",
                    description: "must be a string and is required"
                  },
                  timestamp: {
                    bsonType: "date",
                    description: "must be a date and is required"
                  }
                }
              },
              description: "must be an array of messages and is required"
            }
          }
        }
      }
    });
  },
  async down(db, client) {
    await db.collection('chats').drop();
  }
};
