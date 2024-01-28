const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 라우트 예시
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

module.exports = startServer;
