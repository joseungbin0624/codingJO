const mongoose = require('mongoose');
const Visualization = require('../../api/v1/models/Visualization');

describe('Visualization Model Test', () => {
  beforeAll(async () => {
    const url = 'mongodb://127.0.0.1/visualizationTestDB';
    await mongoose.connect(url);
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('create & save visualization successfully', async () => {
    const visualizationData = { title: 'Test Title', description: 'Test Description', data: { chart: 'bar' }, createdBy: new mongoose.Types.ObjectId() };
    const visualization = new Visualization(visualizationData);
    const savedVisualization = await visualization.save();

    expect(savedVisualization._id).toBeDefined();
    expect(savedVisualization.title).toBe(visualizationData.title);
    expect(savedVisualization.description).toBe(visualizationData.description);
    expect(savedVisualization.data.chart).toBe(visualizationData.data.chart);
    expect(savedVisualization.createdBy).toEqual(visualizationData.createdBy);
  });

  it('fails when title is not provided', async () => {
    const visualizationData = { description: 'Test Description', data: { chart: 'bar' }, createdBy: new mongoose.Types.ObjectId() };
    let err;
    try {
      const visualization = new Visualization(visualizationData);
      await visualization.save();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.title).toBeDefined();
  });
});
