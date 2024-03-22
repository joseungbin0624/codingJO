import * as actions from '../../store/eventActions';
import * as actionTypes from '../../store/actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getEvents as getEventsService } from '../../services/eventService';
jest.mock('../../services/eventService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('eventActions', () => {
  it('getEvents 액션 생성자가 성공적으로 이벤트를 불러올 때', async () => {
    const mockEvents = [{ id: 1, title: '테스트 이벤트' }];
    getEventsService.mockResolvedValueOnce(mockEvents);
    const expectedActions = [{ type: actionTypes.GET_EVENTS, payload: mockEvents }];

    const store = mockStore({ events: [] });
    await store.dispatch(actions.getEvents());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
