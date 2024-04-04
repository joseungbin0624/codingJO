const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');
const Dashboard = require('../../api/v1/models/Dashboard');
const User = require('../../api/v1/models/User');

describe('Dashboard Routes Integration Tests', () => {
  let user;

  beforeEach(async () => {
    await Dashboard.deleteMany({});
    await User.deleteMany({});

    // 사용자를 생성합니다.
    user = await User.create({
      username: 'testUser',
      email: 'test@example.com',
      password: 'password',
    });
  });

  afterEach(async () => {
    await Dashboard.deleteMany({});
    await User.deleteMany({});
  });

  test('POST /api/dashboard - Fetches or creates a dashboard for a user ID', async () => {
    const response = await request(app)
      .post('/api/dashboard')
      .send({ userId: user._id.toString() });
  
    expect([200, 201]).toContain(response.statusCode);
    expect(response.body.userId).toEqual(user._id.toString());
    expect(response.body.widgets).toBeDefined();
  });
  

  test('POST /api/dashboard/addWidget - Adds a widget to the dashboard', async () => {
    // 먼저 대시보드를 생성하거나 확인합니다.
    await request(app)
      .post('/api/dashboard')
      .send({ userId: user._id.toString() });

    const widgetToAdd = 'widget2';
    const addWidgetResponse = await request(app)
      .post('/api/dashboard/addWidget')
      .send({ userId: user._id.toString(), widget: widgetToAdd });

    expect(addWidgetResponse.statusCode).toBe(200);
    expect(addWidgetResponse.body.widgets).toContain(widgetToAdd);
  });

  test('POST /api/dashboard/removeWidget - Removes a widget from the dashboard', async () => {
    // 먼저 대시보드를 생성하고, 위젯을 추가합니다.
    await request(app)
      .post('/api/dashboard')
      .send({ userId: user._id.toString() });

    const widgetToAdd = 'widget3';
    await request(app)
      .post('/api/dashboard/addWidget')
      .send({ userId: user._id.toString(), widget: widgetToAdd });

    // 이제 위젯을 제거합니다.
    const removeWidgetResponse = await request(app)
      .post('/api/dashboard/removeWidget')
      .send({ userId: user._id.toString(), widget: widgetToAdd });

    expect(removeWidgetResponse.statusCode).toBe(200);
    expect(removeWidgetResponse.body.widgets).not.toContain(widgetToAdd);
  });
});
