export const formatEventDate = (date) => {
  // 날짜를 사용자 친화적인 포맷으로 변환
  return new Date(date).toLocaleDateString('ko-KR', {
      year: 'numeric', month: 'long', day: 'numeric'
  });
};

export const calculateEventStatus = (startDate, endDate) => {
  const now = new Date();
  if (now < startDate) return "Upcoming";
  if (now > endDate) return "Ended";
  return "Ongoing";
};
