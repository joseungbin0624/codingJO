import * as actionTypes from './actionTypes';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // 사용자 관련 액션을 더 처리할 수 있습니다.
    default:
      return state;
  }
}
