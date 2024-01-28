// 액션 타입 정의
export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';

// 사용자 설정 액션
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  };
};

// 로그아웃 액션
export const logout = () => {
  return {
    type: LOGOUT
  };
};
