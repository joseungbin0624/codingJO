import * as actions from '../../store/courseActions';
import * as actionTypes from '../../store/actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { getCourses as getCoursesService } from '../../services/courseService';
jest.mock('../../services/courseService');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('courseActions', () => {
  it('getCourses 액션 생성자가 성공적으로 코스를 불러올 때', async () => {
    const mockCourses = [{ id: 1, title: '테스트 코스' }];
    getCoursesService.mockResolvedValueOnce(mockCourses);
    const expectedActions = [{ type: actionTypes.GET_COURSES, payload: mockCourses }];

    const store = mockStore({ courses: [] });
    await store.dispatch(actions.getCourses());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
