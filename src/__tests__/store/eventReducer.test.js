import eventReducer from '../../store/eventReducer';
import * as actionTypes from '../../store/actionTypes';

describe('eventReducer', () => {
  it('GET_EVENTS 액션 처리', () => {
    const initialState = { events: [], loading: false, error: null };
    const action = {
      type: actionTypes.GET_EVENTS,
      payload: [{ id: 1, title: '테스트 이벤트' }],
    };
    const expectedState = { ...initialState, events: action.payload };

    expect(eventReducer(initialState, action)).toEqual(expectedState);
  });
});
