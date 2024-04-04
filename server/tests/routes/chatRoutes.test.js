const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../app');

describe('Chat Routes Integration Tests', () => {
    // 채팅 생성 테스트
    test('POST /api/chat/ - 채팅 생성', async () => {
        const userId1 = new mongoose.Types.ObjectId();
        const userId2 = new mongoose.Types.ObjectId();
        const response = await request(app)
            .post('/api/chat/')
            .send({participants: [userId1.toString(), userId2.toString()]});
        expect(response.statusCode).toBe(201);
        expect(response.body.participants).toEqual(expect.arrayContaining([userId1.toString(), userId2.toString()]));
    });

    // 메시지 추가 테스트
    test('POST /api/chat/:chatId/messages - 메시지 추가', async () => {
        const userId1 = new mongoose.Types.ObjectId();
        const userId2 = new mongoose.Types.ObjectId();
        const chatResponse = await request(app)
            .post('/api/chat/')
            .send({participants: [userId1.toString(), userId2.toString()]});
        const chatId = chatResponse.body._id;
        
        const messageResponse = await request(app)
            .post(`/api/chat/${chatId}/messages`)
            .send({sender: userId1.toString(), message: '테스트 메시지'});
        expect(messageResponse.statusCode).toBe(200);
    });

    // 채팅 조회 테스트
    test('GET /api/chat/:chatId - 채팅 조회', async () => {
        const userId1 = new mongoose.Types.ObjectId();
        const userId2 = new mongoose.Types.ObjectId();
        const chatResponse = await request(app)
            .post('/api/chat/')
            .send({participants: [userId1.toString(), userId2.toString()]});
        const chatId = chatResponse.body._id;

        const response = await request(app)
            .get(`/api/chat/${chatId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body._id).toEqual(chatId);
    });

    // 사용자 채팅 조회 테스트
    test('GET /api/chat/user/:userId - 사용자 채팅 조회', async () => {
        const userId1 = new mongoose.Types.ObjectId();
        const userId2 = new mongoose.Types.ObjectId();
        await request(app)
            .post('/api/chat/')
            .send({participants: [userId1.toString(), userId2.toString()]});

        const response = await request(app)
            .get(`/api/chat/user/${userId1}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});
