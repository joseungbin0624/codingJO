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
