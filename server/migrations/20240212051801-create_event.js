module.exports = {
  async up(db, client) {
    await db.createCollection('events', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["name", "organizer", "location", "startDate", "endDate", "description"],
          properties: {
            name: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            organizer: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            location: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            startDate: {
              bsonType: "date",
              description: "must be a date and is required"
            },
            endDate: {
              bsonType: "date",
              description: "must be a date and is required"
            },
            description: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            attendees: {
              bsonType: "array",
              items: {
                bsonType: "objectId"
              }
            }
          }
        }
      }
    });
  },
  async down(db, client) {
    await db.collection('events').drop();
  }
};
