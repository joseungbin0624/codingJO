import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getAllForums, getForumById, createForum } from '../../services/forumService';

describe('Forum Service', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('fetches all forums successfully', async () => {
    const forums = [{ id: 1, title: 'Web Development' }];
    mock.onGet('/forums').reply(200, forums);

    const result = await getAllForums();
    expect(result).toEqual(forums);
  });

  it('fetches a forum by id successfully', async () => {
    const forum = { id: 1, title: 'Web Development' };
    mock.onGet(`/forums/${forum.id}`).reply(200, forum);

    const result = await getForumById(forum.id);
    expect(result).toEqual(forum);
  });

  it('creates a forum successfully', async () => {
    const forumData = { title: 'New Forum', description: 'About new technologies' };
    mock.onPost('/forums').reply(200, { ...forumData, id: 2 });

    const result = await createForum(forumData);
    expect(result).toEqual({ ...forumData, id: 2 });
  });

  it('handles error while fetching all forums', async () => {
    mock.onGet('/forums').networkError();
    await expect(getAllForums()).rejects.toThrow('Network Error');
  });
});
