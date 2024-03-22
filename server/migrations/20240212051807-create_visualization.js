module.exports = {
  async up(db, client) {
    await db.createCollection('visualizations', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["title", "createdBy"],
          properties: {
            title: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            description: {
              bsonType: "string",
              description: "must be a string"
            },
            data: {
              bsonType: "object",
              description: "flexible object for visualization data"
            },
            createdBy: {
              bsonType: "objectId",
              description: "must be an objectId and is required"
            }
          }
        }
      }
    });
  },
  async down(db, client) {
    await db.collection('visualizations').drop();
  }
};
