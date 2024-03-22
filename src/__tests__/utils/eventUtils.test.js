import { formatEventDate, calculateEventStatus } from '../../utils/eventUtils';

describe('eventUtils 함수', () => {
  test('formatEventDate가 날짜를 올바른 포맷으로 변환하는지 확인', () => {
    const date = new Date(2023, 0, 1); // 2023년 1월 1일
    expect(formatEventDate(date)).toBe('2023년 1월 1일');
  });

  test('calculateEventStatus가 행사 상태를 올바르게 계산하는지 확인', () => {
    const now = new Date();
    const pastDate = new Date(now.setDate(now.getDate() - 1));
    const futureDate = new Date(now.setDate(now.getDate() + 2));

    expect(calculateEventStatus(pastDate, pastDate)).toBe('Ended');
    expect(calculateEventStatus(futureDate, futureDate)).toBe('Upcoming');
    expect(calculateEventStatus(pastDate, futureDate)).toBe('Ongoing');
  });
});
