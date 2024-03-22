import * as actions from '../../store/userActions';
import * as actionTypes from '../../store/actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchCurrentUser } from '../../services/userService';
jest.mock('../../services/userService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('userActions', () => {
  it('fetchCurrentUser 액션 생성자가 성공적으로 사용자 정보를 불러올 때', async () => {
    const mockUser = { id: 1, name: '테스트 사용자' };
    fetchCurrentUser.mockResolvedValueOnce(mockUser);
    const expectedActions = [
      { type: actionTypes.FETCH_USER_SUCCESS, payload: mockUser },
    ];

    const store = mockStore({ user: { userInfo: null } });
    await store.dispatch(actions.fetchCurrentUser());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
