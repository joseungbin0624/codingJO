// E:\project\codingJO\migrate-mongo-config.js
module.exports = {
    mongodb: {
      url: "mongodb://localhost:27017/codingjo",
      databaseName: "codingjo",
      options: {
        // useNewUrlParser와 useUnifiedTopology 옵션 제거
      }
    },
    migrationsDir: "server/migrations",
    changelogCollectionName: "changelog",
  };
  