// notificationUtils.js

// 알림 관련 유틸리티 함수들을 포함합니다.

export const formatNotificationMessage = (notification) => {
  // 알림 타입에 따라 적절한 메시지 포맷을 반환합니다.
  switch (notification.type) {
    case "new_course":
      return `${notification.courseName} 코스가 새로 개설되었습니다.`;
    case "course_update":
      return `${notification.courseName} 코스가 업데이트 되었습니다.`;
    default:
      return "새로운 알림이 도착했습니다.";
  }
};

export const notificationIconSelector = (type) => {
  // 알림 타입에 따라 적절한 아이콘을 반환합니다.
  switch (type) {
    case "new_course":
      return "🆕";
    case "course_update":
      return "🔄";
    default:
      return "🔔";
  }
};
