import { isValidEmail, isValidPassword, isMatchingPasswords } from '../../utils/validationUtils';

describe('validationUtils 함수', () => {
  test('isValidEmail이 유효한 이메일 형식을 올바르게 검증하는지 확인', () => {
    expect(isValidEmail('test@example.com')).toBeTruthy();
    expect(isValidEmail('invalid-email')).toBeFalsy();
  });

  test('isValidPassword가 유효한 패스워드 형식을 올바르게 검증하는지 확인', () => {
    expect(isValidPassword('Password1')).toBeTruthy();
    expect(isValidPassword('short')).toBeFalsy();
  });

  test('isMatchingPasswords가 두 패스워드가 일치하는지 올바르게 검증하는지 확인', () => {
    expect(isMatchingPasswords('Password1', 'Password1')).toBeTruthy();
    expect(isMatchingPasswords('Password1', 'DifferentPassword')).toBeFalsy();
  });
});
