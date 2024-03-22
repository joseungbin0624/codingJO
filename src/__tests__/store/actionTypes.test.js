import * as actionTypes from '../../store/actionTypes';

describe('액션 타입들', () => {
  it('정의된 액션 타입이 올바른지 확인', () => {
    expect(actionTypes.GET_COURSES).toEqual('GET_COURSES');
    expect(actionTypes.GET_EVENTS).toEqual('GET_EVENTS');
    // 필요에 따라 더 많은 액션 타입을 검증
  });
});
