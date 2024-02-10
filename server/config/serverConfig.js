const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const serverConfig = (app) => {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
}

module.exports = serverConfig;
