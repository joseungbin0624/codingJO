import * as actionTypes from './actionTypes';
import { userService } from '../services/userService';

export const fetchCurrentUser = () => async (dispatch) => {
  try {
    const userInfo = await userService.fetchCurrentUser();
    dispatch({ type: actionTypes.FETCH_USER_SUCCESS, payload: userInfo });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_USER_FAILURE, payload: error });
  }
};

// 사용자 액션 생성 함수를 필요에 따라 더 추가할 수 있습니다.
