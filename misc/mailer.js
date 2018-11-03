const nodemailer = require('nodemailer');
const config = require('../config/mailer');

module.exports = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: config.MAILGUN_DOMAIN,
    pass: config.MAILGUN_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});
