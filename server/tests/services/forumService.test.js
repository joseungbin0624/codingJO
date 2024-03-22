const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const forumService = require('../../api/v1/services/forumService');
const Forum = require('../../api/v1/models/Forum');
const Post = require('../../api/v1/models/Post');
const User = require('../../api/v1/models/User');

describe('Forum Service', () => {
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
        await Forum.deleteMany({});
        await Post.deleteMany({});
        await User.deleteMany({});
    });

    it('should add a post to a forum', async () => {
        const user = await User.create({ username: 'author', email: 'author@example.com', password: 'password123' });
        const forum = await Forum.create({ title: 'New Forum', content: 'This is a new forum content', author: user._id });

        const postData = { title: 'New Post', content: 'New post in forum', author: user._id, forum: forum._id };
        const updatedForum = await forumService.addPostToForum(forum._id, postData);

        const posts = await Post.find({ forum: forum._id });
        expect(posts.length).toBe(1);
        expect(posts[0].content).toBe(postData.content);
        expect(posts[0].title).toBe(postData.title);
    });
});
