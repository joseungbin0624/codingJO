export const formatNumber = (number) => {
  // 숫자를 포매팅하여 반환합니다. 예: 콤마 추가
  return Intl.NumberFormat().format(number);
};

export const formatDate = (date) => {
  // 날짜를 포매팅하여 반환합니다. 예: YYYY-MM-DD 형식
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString('ko-KR', options);
};

export const capitalizeFirstLetter = (string) => {
  // 문자열의 첫 글자를 대문자로 변환합니다.
  return string.charAt(0).toUpperCase() + string.slice(1);
};
