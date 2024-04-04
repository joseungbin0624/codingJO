module.exports = {
  testEnvironment: 'node', // Node.js 환경에서 테스트 실행
  testPathIgnorePatterns: ['/node_modules/'], // node_modules 내의 파일은 테스트에서 제외
  setupFilesAfterEnv: ['<rootDir>/../testSetup.js'], // 테스트 실행 전 초기 설정 파일
  transform: {
    '^.+\\.js$': 'babel-jest', // ES6 이상의 문법을 사용하는 JavaScript 파일 변환
  }
};
