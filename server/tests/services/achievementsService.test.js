const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Achievement = require('../../api/v1/models/Achievement');
const achievementsService = require('../../api/v1/services/achievementsService');

describe('Achievements Service Tests', () => {
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
        await Achievement.deleteMany({});
    });

    it('새로운 업적을 생성해야 한다', async () => {
        const achievementData = { title: '5개의 코스 완료', description: '5개의 코스를 완료하면 수여됩니다.', achievedBy: [] };
        const achievement = await achievementsService.createAchievement(achievementData);

        expect(achievement).toHaveProperty('_id');
        expect(achievement.title).toEqual(achievementData.title);
        expect(achievement.description).toEqual(achievementData.description);
        expect(Array.isArray(achievement.achievedBy)).toBe(true);
        expect(achievement.achievedBy).toHaveLength(0);
    });

    // ...

    it('모든 업적을 조회해야 한다', async () => {
        await achievementsService.createAchievement({ title: '첫 번째 업적', description: '첫 번째 업적 설명', achievedBy: [] });
        await achievementsService.createAchievement({ title: '두 번째 업적', description: '두 번째 업적 설명', achievedBy: [] });

        const achievements = await achievementsService.getAllAchievements();
        expect(achievements.length).toBe(2);
    });

    it('업적 ID로 업적을 조회할 수 있어야 한다', async () => {
        const newAchievement = await achievementsService.createAchievement({ title: '업적 조회 테스트', description: 'ID로 업적 조회', achievedBy: [] });
        const achievement = await achievementsService.getAchievementById(newAchievement._id);

        expect(achievement.title).toBe(newAchievement.title);
        expect(achievement.description).toBe(newAchievement.description);
    });

    it('업적을 업데이트할 수 있어야 한다', async () => {
        const achievement = await achievementsService.createAchievement({ title: '업적 업데이트 전', description: '업데이트 전', achievedBy: [] });
        const updatedAchievement = await achievementsService.updateAchievement(achievement._id, { title: '업적 업데이트 후', description: '업데이트 후' });

        expect(updatedAchievement.title).toBe('업적 업데이트 후');
        expect(updatedAchievement.description).toBe('업데이트 후');
    });

    it('업적을 삭제할 수 있어야 한다', async () => {
        const achievement = await achievementsService.createAchievement({ title: '삭제할 업적', description: '이 업적은 삭제될 예정', achievedBy: [] });
        await achievementsService.deleteAchievement(achievement._id);

        const foundAchievement = await Achievement.findById(achievement._id);
        expect(foundAchievement).toBeNull();
    });

});

