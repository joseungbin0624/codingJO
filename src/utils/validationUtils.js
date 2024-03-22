export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isValidPassword = (password) => {
  // 최소 8자, 하나 이상의 문자 및 하나의 숫자 포함
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
};

export const isMatchingPasswords = (password, confirmPassword) => {
  return password === confirmPassword;
};
