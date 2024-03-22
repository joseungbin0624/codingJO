import courseReducer from '../../store/courseReducer';
import * as actionTypes from '../../store/actionTypes';

describe('courseReducer', () => {
  it('GET_COURSES 액션 처리', () => {
    const initialState = { courses: [], loading: false, error: null };
    const action = {
      type: actionTypes.GET_COURSES,
      payload: [{ id: 1, title: '테스트 코스' }],
    };
    const expectedState = { ...initialState, courses: action.payload };

    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});
