import { formatNumber, formatDate, capitalizeFirstLetter } from '../../utils/formattingUtils';

describe('formattingUtils 함수', () => {
  test('formatNumber가 숫자를 올바른 포맷으로 변환하는지 확인', () => {
    expect(formatNumber(1000)).toBe('1,000');
  });

  test('formatDate가 날짜를 올바른 포맷으로 변환하는지 확인', () => {
    // 기대값을 수정합니다.
    expect(formatDate(new Date('2023-01-01'))).toBe('2023. 01. 01.');
  });

  test('capitalizeFirstLetter가 문자열의 첫 글자를 대문자로 만드는지 확인', () => {
    expect(capitalizeFirstLetter('test')).toBe('Test');
  });
});
