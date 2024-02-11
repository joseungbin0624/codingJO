// 입력 데이터 유효성 검사 유틸리티

// 문자열 길이 검사
export const isStringLengthValid = (string, min, max) => {
  return string.length >= min && string.length <= max;
};

// 숫자 범위 검사
export const isNumberInRange = (number, min, max) => {
  return number >= min && number <= max;
};

// 비밀번호 복잡성 검사
export const isPasswordComplex = (password) => {
  // 최소 8자, 최소 하나의 문자 및 하나의 숫자 포함
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
};
