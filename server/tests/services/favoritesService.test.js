const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const favoritesService = require('../../api/v1/services/favoritesService');
const Favorite = require('../../api/v1/models/Favorite');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');

describe('Favorites Service', () => {
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
        await Favorite.deleteMany({});
        await User.deleteMany({});
        await Course.deleteMany({});
    });

    it('should add and remove a course to favorites', async () => {
        const user = await User.create({ username: 'user1', email: 'user1@example.com', password: 'password123' });
        const course = await Course.create({ title: 'New Course', description: 'Course Description', category: 'Programming', instructor: user._id, price: 100 });

        await favoritesService.addFavorite(user._id, course._id);
        let favorite = await Favorite.findOne({ user: user._id }).populate('courses');
        expect(favorite.courses.map(course => course._id.toString())).toContain(course._id.toString());

        await favoritesService.removeFavorite(user._id, course._id);
        favorite = await Favorite.findOne({ user: user._id }).populate('courses');
        expect(favorite.courses.map(course => course._id.toString())).not.toContain(course._id.toString());
    });

    it('should retrieve user favorites', async () => {
        const user = await User.create({ username: 'user1', email: 'user1@example.com', password: 'password123' });
        const course = await Course.create({ title: 'New Course', description: 'Course Description', category: 'Programming', instructor: user._id, price: 100 });

        await favoritesService.addFavorite(user._id, course._id);
        const favorites = await favoritesService.getUserFavorites(user._id);
        expect(favorites.courses.map(course => course._id.toString())).toContain(course._id.toString());
    });
});
