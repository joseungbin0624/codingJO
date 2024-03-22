import api from '../../utils/api';

describe('api 유틸리티', () => {
  test('axios 인스턴스가 올바른 baseURL로 생성되었는지 확인', () => {
    expect(api.defaults.baseURL).toBe(process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api');
  });

  test('axios 인스턴스에 기본 헤더가 설정되어 있는지 확인', () => {
    expect(api.defaults.headers['Content-Type']).toBe('application/json');
  });
});
