export const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };
  
  export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };
   
