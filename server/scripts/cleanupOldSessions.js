require('dotenv').config(); // 환경 변수 로드
const mongoose = require('mongoose');
const Session = require('../api/v1/models/Session');

const MONGODB_URI = process.env.MONGODB_URI;

(async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('MongoDB Connected');

        const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const result = await Session.deleteMany({ createdAt: { $lt: oneWeekAgo } });
        console.log(`${result.deletedCount} old sessions were removed.`);
    } catch (error) {
        console.error('Failed to cleanup old sessions:', error);
    } finally {
        await mongoose.disconnect();
    }
})();
