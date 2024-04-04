const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Tutorial = require('../../api/v1/models/Tutorial');
const tutorialsService = require('../../api/v1/services/tutorialsService');

describe('Tutorials Service Tests', () => {
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
        await Tutorial.deleteMany({});
    });

    it('createTutorial should create a new tutorial', async () => {
        const tutorialData = { title: 'New Tutorial', content: 'Tutorial Content', author: new mongoose.Types.ObjectId() };
        const tutorial = await tutorialsService.createTutorial(tutorialData);
        
        expect(tutorial.title).toBe(tutorialData.title);
        expect(tutorial.content).toBe(tutorialData.content);
    });

    it('getAllTutorials should retrieve all tutorials', async () => {
        await tutorialsService.createTutorial({ title: 'Tutorial 1', content: 'Content 1', author: new mongoose.Types.ObjectId() });
        await tutorialsService.createTutorial({ title: 'Tutorial 2', content: 'Content 2', author: new mongoose.Types.ObjectId() });
        
        const tutorials = await tutorialsService.getAllTutorials();
        expect(tutorials.length).toBe(2);
    });

    it('getTutorialById should retrieve a tutorial by ID', async () => {
        const tutorial = await tutorialsService.createTutorial({ title: 'New Tutorial', content: 'Tutorial Content', author: new mongoose.Types.ObjectId() });
        
        const foundTutorial = await tutorialsService.getTutorialById(tutorial._id);
        expect(foundTutorial._id.toString()).toBe(tutorial._id.toString());
    });

    it('updateTutorial should update a tutorial', async () => {
        const tutorial = await tutorialsService.createTutorial({ title: 'Original Title', content: 'Original Content', author: new mongoose.Types.ObjectId() });
        
        const updatedTutorial = await tutorialsService.updateTutorial(tutorial._id, { title: 'Updated Title', content: 'Updated Content' });
        expect(updatedTutorial.title).toBe('Updated Title');
        expect(updatedTutorial.content).toBe('Updated Content');
    });

    it('deleteTutorial should delete a tutorial', async () => {
        const tutorial = await tutorialsService.createTutorial({ title: 'Tutorial to Delete', content: 'Content', author: new mongoose.Types.ObjectId() });
        
        await tutorialsService.deleteTutorial(tutorial._id);
        const foundTutorial = await Tutorial.findById(tutorial._id);
        expect(foundTutorial).toBeNull();
    });
});
