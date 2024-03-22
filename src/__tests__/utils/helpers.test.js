import { isEmptyObject, debounce, safelyParseJSON } from '../../utils/helpers';

describe('helpers 함수', () => {
  test('isEmptyObject가 빈 객체인지 정확히 판별하는지 확인', () => {
    expect(isEmptyObject({})).toBeTruthy();
    expect(isEmptyObject({ key: 'value' })).toBeFalsy();
  });

  // debounce 함수는 비동기 로직을 포함하므로, jest의 가짜 타이머를 사용할 수 있습니다.
  jest.useFakeTimers();
  test('debounce 함수가 실행을 지연시키는지 확인', () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 1000);

    debouncedFunc();
    expect(func).not.toHaveBeenCalled();

    jest.runAllTimers();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('safelyParseJSON이 JSON 문자열을 안전하게 파싱하는지 확인', () => {
    const validJSON = '{"key": "value"}';
    const invalidJSON = 'invalid JSON';

    expect(safelyParseJSON(validJSON)).toEqual({ key: 'value' });
    expect(safelyParseJSON(invalidJSON)).toBeNull();
  });
});
