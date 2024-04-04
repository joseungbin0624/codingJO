const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Forum = require('../../api/v1/models/Forum');
const forumService = require('../../api/v1/services/forumService');
const User = require('../../api/v1/models/User');

describe('Forum Service Tests', () => {
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
        await Forum.deleteMany({});
        await User.deleteMany({});
    });

    it('createForum should create a new forum', async () => {
        const user = await User.create({ username: 'author', email: 'author@example.com', password: 'password' });
        const forumData = { title: 'New Forum', content: 'Forum content', author: user._id };

        const forum = await forumService.createForum(forumData);
        expect(forum.title).toBe(forumData.title);
        expect(forum.content).toBe(forumData.content);
    });

    it('getAllForums should retrieve all forums', async () => {
        const user = await User.create({ username: 'author', email: 'author@example.com', password: 'password' });
        await forumService.createForum({ title: 'Forum 1', content: 'Content 1', author: user._id });
        await forumService.createForum({ title: 'Forum 2', content: 'Content 2', author: user._id });

        const forums = await forumService.getAllForums();
        expect(forums.length).toBe(2);
    });

    it('getForumById should retrieve a forum by ID', async () => {
        const user = await User.create({ username: 'author', email: 'author@example.com', password: 'password' });
        const forum = await forumService.createForum({ title: 'New Forum', content: 'Forum content', author: user._id });

        const foundForum = await forumService.getForumById(forum._id);
        expect(foundForum._id.toString()).toBe(forum._id.toString());
    });
});
