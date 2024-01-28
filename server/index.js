require('dotenv').config(); 


console.log('Database URL:', process.env.DB_URL);
const app = require('./app');
const connectDatabase = require('./config/database');

const PORT = process.env.PORT || 5000;

// 데이터베이스 연결
connectDatabase();

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
