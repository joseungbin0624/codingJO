import rootReducer from '../../store/reducers';
import * as actionTypes from '../../store/actionTypes';

describe('rootReducer', () => {
  it('초기 상태를 반환', () => {
    expect(rootReducer(undefined, {})).toEqual({
      course: expect.any(Object),
      event: expect.any(Object),
      feedback: expect.any(Object),
      forum: expect.any(Object),
      user: expect.any(Object),
    });
  });

  it('GET_COURSES 액션 후 상태 업데이트', () => {
    const action = {
      type: actionTypes.GET_COURSES,
      payload: [{ id: 1, title: '테스트 코스' }],
    };
    const state = rootReducer(undefined, action);
    expect(state.course.courses).toEqual(action.payload);
  });
});
