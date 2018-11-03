const nodemailer = require('nodemailer');
const config = require('../config/mailer');

module.exports = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  secure: false,
  auth: {
    user: config.MAILGUN_USER,
    pass: config.MAILGUN_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});
