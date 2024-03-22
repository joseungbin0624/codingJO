module.exports = {
  async up(db, client) {
    await db.createCollection('users', {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["username", "email", "password"],
          properties: {
            username: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            email: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            password: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            isAdmin: {
              bsonType: "bool",
              description: "must be a boolean"
            }
          }
        }
      }
    });
    // 이메일과 사용자명에 대해 유니크 인덱스 생성
    await db.collection('users').createIndex({ "email": 1 }, { unique: true });
    await db.collection('users').createIndex({ "username": 1 }, { unique: true });
  },
  async down(db, client) {
    await db.collection('users').drop();
  }
};
