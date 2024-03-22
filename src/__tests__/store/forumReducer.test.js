import forumReducer from '../../store/forumReducer';
import * as actionTypes from '../../store/actionTypes';

describe('forumReducer', () => {
  it('GET_FORUMS 액션 처리', () => {
    const initialState = { forums: [], selectedForum: null, loading: false, error: null };
    const forums = [{ id: 1, title: '테스트 포럼' }];
    const action = { type: actionTypes.GET_FORUMS, payload: forums };
    const expectedState = { ...initialState, forums: forums };

    expect(forumReducer(initialState, action)).toEqual(expectedState);
  });

  it('SELECT_FORUM 액션 처리', () => {
    const initialState = { forums: [], selectedForum: null, loading: false, error: null };
    const selectedForum = { id: 2, title: '선택된 포럼' };
    const action = { type: actionTypes.SELECT_FORUM, payload: selectedForum };
    const expectedState = { ...initialState, selectedForum: selectedForum };

    expect(forumReducer(initialState, action)).toEqual(expectedState);
  });
});
