// helpers.js

// 여러 곳에서 사용될 수 있는 일반적인 도우미 함수들을 포함합니다.

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const safelyParseJSON = (json) => {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error("Error parsing JSON string:", e);
    return null;
  }
};
