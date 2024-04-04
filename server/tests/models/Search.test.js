const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Search = require('../../api/v1/models/Search');

describe('Search Model Test', () => {
  let mongoServer;

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it('create & save search entry successfully', async () => {
    const searchData = { query: 'test query', results: [{ name: 'Test Result' }] };
    const searchEntry = new Search(searchData);
    const savedSearchEntry = await searchEntry.save();

    expect(savedSearchEntry._id).toBeDefined();
    expect(savedSearchEntry.query).toBe('test query');
    expect(savedSearchEntry.results.length).toBe(1);
    expect(savedSearchEntry.results[0].name).toBe('Test Result');
  });
});
