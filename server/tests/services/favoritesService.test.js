const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Favorite = require('../../api/v1/models/Favorite');
const favoritesService = require('../../api/v1/services/favoritesService');
const User = require('../../api/v1/models/User');
const Course = require('../../api/v1/models/Course');

describe('Favorites Service Tests', () => {
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
        await Favorite.deleteMany({});
        await User.deleteMany({});
        await Course.deleteMany({});
    });

    it('addFavorite should add a course to user favorites', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        const course = await Course.create({ title: 'Test Course', description: 'Test Description', category: 'Test Category', price: 100, instructor: new mongoose.Types.ObjectId() });
        const favorite = await favoritesService.addFavorite(user._id, course._id);

        expect(favorite.courses).toContainEqual(course._id);
    });

    it('removeFavorite should remove a course from user favorites', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        const course = await Course.create({ title: 'Test Course', description: 'Test Description', category: 'Test Category', price: 100, instructor: new mongoose.Types.ObjectId() });
        let favorite = await new Favorite({ user: user._id, courses: [course._id] }).save();

        favorite = await favoritesService.removeFavorite(user._id, course._id);
        expect(favorite.courses).not.toContainEqual(course._id);
    });

    it('getUserFavorites should retrieve all favorites for a user', async () => {
        const user = await User.create({ username: 'user', email: 'user@example.com', password: 'password' });
        const course1 = await Course.create({ title: 'Test Course 1', description: 'Test Description 1', category: 'Test Category 1', price: 100, instructor: new mongoose.Types.ObjectId() });
        const course2 = await Course.create({ title: 'Test Course 2', description: 'Test Description 2', category: 'Test Category 2', price: 200, instructor: new mongoose.Types.ObjectId() });
        await new Favorite({ user: user._id, courses: [course1._id, course2._id] }).save();

        const favorites = await favoritesService.getUserFavorites(user._id);
        expect(favorites.courses.length).toBe(2);
        expect(favorites.courses.map(course => course._id.toString())).toEqual(expect.arrayContaining([course1._id.toString(), course2._id.toString()]));
    });
});
