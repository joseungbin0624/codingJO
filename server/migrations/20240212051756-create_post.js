module.exports = {
  async up(db, client) {
    // Post 스키마 생성
    await db.createCollection('posts', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["title", "content", "author", "forum"],
          properties: {
            title: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            content: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            author: {
              bsonType: "objectId",
              description: "must be an objectId and is required"
            },
            forum: {
              bsonType: "objectId",
              description: "must be an objectId and is required"
            },
            comments: {
              bsonType: "array",
              items: {
                bsonType: "object",
                required: ["content", "author"],
                properties: {
                  content: {
                    bsonType: "string",
                    description: "must be a string and is required"
                  },
                  author: {
                    bsonType: "objectId",
                    description: "must be an objectId and is required"
                  },
                  createdAt: {
                    bsonType: "date",
                    description: "must be a date and is required"
                  }
                }
              }
            }
          }
        }
      }
    });
  },
  async down(db, client) {
    await db.collection('posts').drop();
  }
};
