'use strict';
const express = require('express');
const morgan = require('morgan');
const { createRequestHandler } = require('@remix-run/express');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.static('public'));

app.all(
  '*',
  createRequestHandler({
    getLoadContext() {},
  }),
);

module.exports = app;
