import '@testing-library/jest-dom';
import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// axios 요청을 모킹하기 위한 axios-mock-adapter 인스턴스 생성
const mock = new AxiosMockAdapter(axios);

// 전역 localStorage 모킹
class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }

  clear() {
    this.store = {};
  }
}

global.localStorage = new LocalStorageMock();

// 모든 테스트가 실행되기 전에 한 번만 호출됩니다.
beforeAll(() => {
  // API 요청 모킹 예시
  // mock.onGet('/api/path').reply(200, {data: 'some data'});
});

// 각 테스트 후에 호출됩니다.
afterEach(() => {
  mock.reset(); // 각 테스트 후에 모킹 상태 리셋
});
