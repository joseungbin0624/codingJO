import feedbackReducer from '../../store/feedbackReducer';
import * as actionTypes from '../../store/actionTypes';

describe('feedbackReducer', () => {
  it('SUBMIT_FEEDBACK 액션 처리', () => {
    const initialState = { feedbacks: [], loading: false, error: null };
    const newFeedback = { id: 1, text: '새로운 피드백' };
    const action = { type: actionTypes.SUBMIT_FEEDBACK, payload: newFeedback };
    const expectedState = {
      ...initialState,
      feedbacks: [...initialState.feedbacks, newFeedback],
    };

    expect(feedbackReducer(initialState, action)).toEqual(expectedState);
  });
});
