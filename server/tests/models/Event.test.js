const mongoose = require('mongoose');
const Event = require('../../api/v1/models/Event');
const User = require('../../api/v1/models/User');
const { MongoMemoryServer } = require('mongodb-memory-server');

describe('Event Model Test', () => {
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

  it('Event 저장 및 검증', async () => {
    const attendee = new User({ username: 'attendee', email: 'attendee@example.com', password: 'password123' });
    await attendee.save();

    const event = new Event({
      name: "프로그래밍 워크숍",
      organizer: "코딩 스쿨",
      location: "서울",
      startDate: new Date(),
      endDate: new Date(),
      attendees: [attendee._id],
      description: "프로그래밍에 대한 워크숍입니다.", // description 필드 추가
    });

    const savedEvent = await event.save();
    expect(savedEvent.name).toEqual("프로그래밍 워크숍");
    expect(savedEvent.attendees[0]).toEqual(attendee._id);
    expect(savedEvent.description).toEqual("프로그래밍에 대한 워크숍입니다."); // description 검증
  });
});
