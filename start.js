'use strict';
require('make-promises-safe');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const port = Number(process.env.PORT) || 3000;
const IP = process.env.IP_ADDRESS || 'localhost';

app.listen(port, IP, () => {
  console.log(`Express server started on http://${IP}:${port}`);
});
