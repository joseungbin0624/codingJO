import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { createVisualization, getAllVisualizations, getVisualizationById } from '../../services/visualizationService';

describe('Visualization Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('creates a visualization successfully', async () => {
    const visualizationData = { title: 'Sales Data', type: 'bar' };
    mock.onPost('/visualizations').reply(200, { ...visualizationData, id: 1 });

    const result = await createVisualization(visualizationData);
    expect(result).toEqual({ ...visualizationData, id: 1 });
  });

  it('fetches all visualizations successfully', async () => {
    const visualizations = [{ id: 1, title: 'Sales Data', type: 'bar' }];
    mock.onGet('/visualizations').reply(200, visualizations);

    const result = await getAllVisualizations();
    expect(result).toEqual(visualizations);
  });

  it('fetches a visualization by id successfully', async () => {
    const visualization = { id: 1, title: 'Sales Data', type: 'bar' };
    mock.onGet(`/visualizations/${visualization.id}`).reply(200, visualization);

    const result = await getVisualizationById(visualization.id);
    expect(result).toEqual(visualization);
  });

  it('handles error while creating a visualization', async () => {
    const visualizationData = { title: 'Sales Data', type: 'bar' };
    mock.onPost('/visualizations').networkError();
    await expect(createVisualization(visualizationData)).rejects.toThrow('Network Error');
  });
});
