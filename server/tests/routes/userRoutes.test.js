const request = require('supertest');
const app = require('../../app');
const User = require('../../api/v1/models/User');

describe('User Routes Test', () => {
    afterEach(async () => {
        await User.deleteMany({});
    });

    test('Should register a new user', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({
                username: 'newUser',
                email: 'new@example.com',
                password: 'MyPass777!'
            })
            .expect(201);

        const user = await User.findOne({ email: 'new@example.com' });
        expect(user).not.toBeNull();
        expect(response.body).not.toHaveProperty('password');
    });
});
