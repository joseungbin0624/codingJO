// 이 파일에서 migrate-mongo를 구성할 수 있습니다.

const config = {
  mongodb: {
    // MongoDB URL을 여러분의 MongoDB URL로 변경(또는 검토)하세요:
    url: "mongodb://localhost:27017",

    // 여러분의 데이터베이스 이름으로 이 부분을 변경하세요:
    databaseName: "codingjo",

    options: {
      useNewUrlParser: true, // 연결 시 경고 제거
      useUnifiedTopology: true, // 연결 시 경고 제거
      //   connectTimeoutMS: 3600000, // 연결 시간 초과를 1시간으로 증가
      //   socketTimeoutMS: 3600000, // 소켓 시간 초과를 1시간으로 증가
    }
  },

  // 마이그레이션 디렉토리, 상대 경로나 절대 경로를 사용할 수 있습니다. 정말 필요한 경우에만 이를 수정하세요.
  migrationsDir: "server/migrations",

  // 적용된 변경사항이 저장되는 MongoDB 컬렉션 이름입니다. 정말 필요한 경우에만 이를 수정하세요.
  changelogCollectionName: "changelog",

  // 마이그레이션을 생성하고 마이그레이션 디렉토리에서 검색하는 데 사용되는 파일 확장자
  migrationFileExtension: ".js",

  // 파일 내용의 체크섬을 생성하는 알고리즘을 활성화하고, 그것을 비교에 사용하여
  // 파일을 실행해야 하는지 결정합니다. 스크립트가 여러 번 실행되도록 코딩되어야 합니다.
  useFileHash: false,

  // 당신이 무엇을 하는지 알지 못한다면, 이것을 변경하지 마세요
  moduleSystem: 'commonjs',
};

module.exports = config;
