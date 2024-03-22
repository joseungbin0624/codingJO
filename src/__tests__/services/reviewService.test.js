import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getCourseReviews, createReview } from '../../services/reviewService';

describe('Review Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('fetches course reviews successfully', async () => {
    const reviews = [{ id: 1, courseId: 1, rating: 5, comment: 'Great course!' }];
    mock.onGet(`/reviews/1`).reply(200, reviews);

    const result = await getCourseReviews(1);
    expect(result).toEqual(reviews);
  });

  it('creates a course review successfully', async () => {
    const reviewData = { courseId: 1, rating: 5, comment: 'Great course!' };
    mock.onPost(`/reviews/1`).reply(200, { ...reviewData, id: 2 });

    const result = await createReview(1, reviewData);
    expect(result).toEqual({ ...reviewData, id: 2 });
  });

  it('handles error while fetching course reviews', async () => {
    mock.onGet(`/reviews/1`).networkError();
    await expect(getCourseReviews(1)).rejects.toThrow('Network Error');
  });
});
