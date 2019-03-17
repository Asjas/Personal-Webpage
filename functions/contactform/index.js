const { Buffer } = require('safe-buffer');
const uuid = require('uuid');
const mailer = require('nodemailer');
const smtp = require('nodemailer-smtp-transport');
const config = require('./config.json');

const transport = mailer.createTransport(
  smtp({
    host: 'in.mailjet.com',
    port: 2525,
    auth: {
      user: process.env.MAILJET_API_KEY || '<your-mailjet-api-key',
      pass: process.env.MAILJET_API_SECRET || '<your-mailjet-api-secret>',
    },
  }),
);

transport.sendMail(
  {
    from: 'ANOTHER_EMAIL@ANOTHER_EXAMPLE.COM', // From address
    to: 'EMAIL@EXAMPLE.COM', // To address
    subject: 'test email from Node.js on Google Cloud Platform', // Subject
    text: 'Hello!\n\nThis a test email from Node.js.', // Content
  },
  function(err, json) {
    if (err) {
      console.log(err);
    } else {
      console.log(json);
    }
  },
);
