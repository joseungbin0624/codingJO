module.exports = {
  async up(db, client) {
    await db.createCollection('courses', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["category", "title", "description", "instructor", "price"],
          properties: {
            category: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            title: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            description: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            instructor: {
              bsonType: "objectId",
              description: "must be an objectId and is required"
            },
            publishDate: {
              bsonType: "date",
              description: "must be a date"
            },
            tags: {
              bsonType: "array",
              items: {
                bsonType: "string"
              }
            },
            level: {
              bsonType: "string",
              enum: ["beginner", "intermediate", "advanced"],
              description: "can only be one of the enum values and is required"
            },
            price: {
              bsonType: "int",
              minimum: 0,
              description: "must be an integer greater than or equal to 0 and is required"
            },
            rating: {
              bsonType: "int",
              minimum: 0,
              maximum: 5,
              description: "must be an integer in [0, 5] and is required"
            },
            imageUrl: {
              bsonType: "string",
              description: "must be a string and is required"
            }
          }
        }
      }
    });
  },
  async down(db, client) {
    await db.collection('courses').drop();
  }
};
