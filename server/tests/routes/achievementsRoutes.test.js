const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

describe('Achievements API Integration Tests', () => {
  // 데이터베이스 초기화 및 종료 로직은 config/database.js로 이동됩니다.
  
  // 각 테스트 사이에 데이터베이스를 초기화합니다.
  afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });
 
  // 실제 엔드포인트 테스트
  test('POST /api/achievements - Should create a new achievement', async () => {
    const newAchievement = {
      title: "New Achievement",
      description: "This is a test achievement"
    };

    const response = await request(app)
      .post('/api/achievements')
      .send(newAchievement);

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(newAchievement.title);
    expect(response.body.description).toBe(newAchievement.description);
  });

  test('GET /api/achievements - Should return all achievements', async () => {
    // 첫 번째 달성도 생성
    await request(app).post('/api/achievements').send({
      title: "First Achievement",
      description: "First test achievement"
    });

    // 두 번째 달성도 생성
    await request(app).post('/api/achievements').send({
      title: "Second Achievement",
      description: "Second test achievement"
    });

    const response = await request(app).get('/api/achievements');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
  });

  test('GET /api/achievements/:achievementId - Should return a specific achievement by ID', async () => {
    // 달성도 생성 후 ID 저장
    const newAchievement = {
      title: "Specific Achievement",
      description: "Achievement for ID-based retrieval test"
    };
    const creationResponse = await request(app)
      .post('/api/achievements')
      .send(newAchievement);
    const achievementId = creationResponse.body._id;
  
    // 생성된 달성도 ID로 조회
    const response = await request(app).get(`/api/achievements/${achievementId}`);
  
    expect(response.statusCode).toBe(200);
    expect(response.body._id).toBe(achievementId);
    expect(response.body.title).toBe(newAchievement.title);
    expect(response.body.description).toBe(newAchievement.description);
  });
  
  // ID에 따른 달성도 수정 테스트
  test('PUT /api/achievements/:achievementId - Should update an existing achievement', async () => {
    // 초기 달성도 생성
    const initialAchievement = {
      title: "Initial Achievement",
      description: "Initial description before update"
    };
    const creationResponse = await request(app)
      .post('/api/achievements')
      .send(initialAchievement);
    const achievementId = creationResponse.body._id;
  
    // 달성도 수정
    const updatedAchievement = {
      title: "Updated Achievement",
      description: "Updated description"
    };
    const updateResponse = await request(app)
      .put(`/api/achievements/${achievementId}`)
      .send(updatedAchievement);
  
    expect(updateResponse.statusCode).toBe(200);
    expect(updateResponse.body.title).toBe(updatedAchievement.title);
    expect(updateResponse.body.description).toBe(updatedAchievement.description);
  });
  
  // 존재하지 않는 ID에 대한 달성도 삭제 시도
  test('DELETE /api/achievements/:achievementId - Should return 404 for non-existing achievement ID', async () => {
    const nonExistingId = new mongoose.Types.ObjectId();
    const response = await request(app).delete(`/api/achievements/${nonExistingId}`);
  
    expect(response.statusCode).toBe(404);
  });
  
  // 특정 사용자의 달성도 조회
  test('GET /api/achievements/user/:userId - Should return achievements for a specific user', async () => {
    const userId = new mongoose.Types.ObjectId(); // 예시 사용자 ID
    // 사용자 달성도 생성
    const userAchievement = {
      title: "User's Achievement",
      description: "Achievement specific to a user",
      achievedBy: [userId]
    };
    await request(app).post('/api/achievements').send(userAchievement);
  
    // 해당 사용자 ID로 달성도 조회
    const response = await request(app).get(`/api/achievements/user/${userId}`);
  
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
    expect(response.body[0].achievedBy.includes(userId.toString())).toBeTruthy();
  });
});
