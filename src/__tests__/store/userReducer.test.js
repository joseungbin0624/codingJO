import userReducer from '../../store/userReducer';
import * as actionTypes from '../../store/actionTypes';

describe('userReducer', () => {
  it('FETCH_USER_SUCCESS 액션 처리', () => {
    const initialState = { userInfo: null, loading: false, error: null };
    const userInfo = { id: 1, name: '테스트 사용자' };
    const action = { type: actionTypes.FETCH_USER_SUCCESS, payload: userInfo };
    const expectedState = { ...initialState, userInfo: userInfo, loading: false, error: null };

    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it('FETCH_USER_FAILURE 액션 처리', () => {
    const initialState = { userInfo: null, loading: false, error: null };
    const error = { message: '에러 발생' };
    const action = { type: actionTypes.FETCH_USER_FAILURE, payload: error };
    const expectedState = { ...initialState, loading: false, error: error };

    expect(userReducer(initialState, action)).toEqual(expectedState);
  });
});
