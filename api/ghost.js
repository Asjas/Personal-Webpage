'use strict';
const GhostContentAPI = require('@tryghost/content-api');
const dotenv = require('dotenv');

dotenv.config();

const api = new GhostContentAPI({
  url: process.env.GHOST_CONTENT_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: 'v3',
});

module.exports = api;
