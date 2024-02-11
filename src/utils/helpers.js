// 다양한 보조 기능을 제공하는 유틸리티 함수 모음

// 이메일 유효성 검사 함수
export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// 객체의 모든 필드가 비어있지 않은지 확인하는 함수
export const validateFieldsNotEmpty = (obj) => {
  return Object.values(obj).every(x => x !== null && x !== '');
};

// URL 유효성 검사 함수
export const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;  
  }
};
