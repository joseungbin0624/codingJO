const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

// 현재 디렉토리 확인
const currentDirectory = process.cwd();

// .env 파일의 경로를 동적으로 설정
let envPath = './.env'; // 기본 경로 설정

// 'server' 디렉토리 내부에서 실행하는 경우
if (currentDirectory.endsWith('server')) {
    envPath = './.env'; // 'server' 디렉토리 안에 있을 경우
} else {
    // 'server' 디렉토리 바깥에서 실행하는 경우 (예: 'E:\project\codingJO')
    const serverEnvPath = path.join(currentDirectory, 'server', '.env');
    if (fs.existsSync(serverEnvPath)) {
        envPath = serverEnvPath;
    }
}

// 설정된 경로로 .env 파일 로드
require('dotenv').config({ path: envPath });

let mongoServer;

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
});

afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

beforeEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
    }
});
