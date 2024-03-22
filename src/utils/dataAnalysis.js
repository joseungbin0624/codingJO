export const calculateAverage = (data) => {
  const sum = data.reduce((acc, value) => acc + value, 0);
  return sum / data.length;
};

export const findMax = (data) => {
  return Math.max(...data);
};

export const findMin = (data) => {
  return Math.min(...data);
};
