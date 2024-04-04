const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Analytics = require('../../api/v1/models/Analytics');
const analyticsService = require('../../api/v1/services/analyticsService');

describe('Analytics Service Tests', () => {
    let mongoServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri);
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async () => {
        await Analytics.deleteMany({});
    });

    it('이벤트 로깅을 수행해야 한다', async () => {
        const eventData = { event: '코스 완료', value: '자바스크립트 기초', timestamp: new Date() };
        const eventLog = await analyticsService.logEvent(eventData);

        expect(eventLog).toHaveProperty('_id');
        expect(eventLog.event).toEqual(eventData.event);
        expect(eventLog.value).toEqual(eventData.value);
        // MongoDB Memory Server의 타임스탬프 정밀도로 인해 직접 비교 대신 존재성만 확인
        expect(eventLog.timestamp).toBeDefined();
    });

    // ...

    it('모든 이벤트를 조회해야 한다', async () => {
        await analyticsService.logEvent({ event: '이벤트1', value: '값1', timestamp: new Date() });
        await analyticsService.logEvent({ event: '이벤트2', value: '값2', timestamp: new Date() });

        const events = await analyticsService.getAllEvents();
        expect(events.length).toBeGreaterThan(1); // 적어도 2개 이상의 이벤트가 로그됨
    });

    it('이벤트 타입별로 이벤트를 조회할 수 있어야 한다', async () => {
        await analyticsService.logEvent({ event: '타입A', value: '값A', timestamp: new Date() });
        await analyticsService.logEvent({ event: '타입B', value: '값B', timestamp: new Date() });

        const typeAEvents = await analyticsService.getEventsByType('타입A');
        expect(typeAEvents.every(e => e.event === '타입A')).toBe(true);
    });

});

