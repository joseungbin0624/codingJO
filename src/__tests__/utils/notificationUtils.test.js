import { formatNotificationMessage, notificationIconSelector } from '../../utils/notificationUtils';

describe('notificationUtils 함수', () => {
  test('formatNotificationMessage가 알림 타입에 따른 메시지를 올바르게 포맷하는지 확인', () => {
    expect(formatNotificationMessage({ type: 'new_course', courseName: 'React 기초' })).toBe('React 기초 코스가 새로 개설되었습니다.');
    expect(formatNotificationMessage({ type: 'course_update', courseName: 'Node.js 심화' })).toBe('Node.js 심화 코스가 업데이트 되었습니다.');
    expect(formatNotificationMessage({})).toBe('새로운 알림이 도착했습니다.');
  });

  test('notificationIconSelector가 알림 타입에 따른 아이콘을 올바르게 반환하는지 확인', () => {
    expect(notificationIconSelector('new_course')).toBe('🆕');
    expect(notificationIconSelector('course_update')).toBe('🔄');
    expect(notificationIconSelector('')).toBe('🔔');
  });
});
