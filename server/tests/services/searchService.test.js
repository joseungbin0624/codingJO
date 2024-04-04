const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Search = require('../../api/v1/models/Search');
const searchService = require('../../api/v1/services/searchService');

describe('Search Service Tests', () => {
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
        await Search.deleteMany({});
    });

    it('createSearchEntry should create a new search entry', async () => {
        const queryData = { query: 'JavaScript', results: [{ title: 'JavaScript Basics' }, { title: 'Advanced JavaScript' }] };

        const searchEntry = await searchService.createSearchEntry(queryData);
        expect(searchEntry.query).toBe(queryData.query);
        expect(searchEntry.results.length).toBe(2);
    });

    it('getSearchResultsByQuery should retrieve search results by query', async () => {
        await searchService.createSearchEntry({ query: 'JavaScript', results: [{ title: 'JavaScript Basics' }, { title: 'Advanced JavaScript' }] });
        await searchService.createSearchEntry({ query: 'Python', results: [{ title: 'Introduction to Python' }] });

        const results = await searchService.getSearchResultsByQuery('JavaScript');
        expect(results.length).toBe(1);
        expect(results[0].results.length).toBe(2);
    });
});
