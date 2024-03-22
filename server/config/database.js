const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

const connectDatabase = async () => {
  // 테스트 환경일 경우, MongoDB 인 메모리 서버 사용
  if (process.env.NODE_ENV === 'test') {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${uri}`);
  } else {
    // 실제 운영 환경에서의 DB 연결 URI 사용
    const dbUri = process.env.MONGODB_URI;
    try {
      await mongoose.connect(dbUri);
      console.log(`MongoDB Connected: ${dbUri}`);
    } catch (error) {
      console.error(`Error connecting to database: ${error.message}`);
      process.exit(1);
    }
  }
};

module.exports = connectDatabase;
