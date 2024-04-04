const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

const connectDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log('Already connected to MongoDB.');
    return;
  }

  if (process.env.NODE_ENV === 'test') {
    if (!mongoServer) {
      mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      await mongoose.connect(uri);
      console.log(`[Test Environment] MongoDB Connected: ${uri}`); // 수정된 로그 메시지
    }
  } else {
    const dbUri = process.env.MONGODB_URI;
    try {
      await mongoose.connect(dbUri);
      console.log(`[Production/Development Environment] MongoDB Connected: ${dbUri}`); // 수정된 로그 메시지
    } catch (error) {
      console.error(`Error connecting to database: ${error.message}`);
      process.exit(1);
    }
  }
};

module.exports = connectDatabase;
