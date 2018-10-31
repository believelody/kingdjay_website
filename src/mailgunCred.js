module.exports = require('mailgun-js')({
  apiKey: process.env.REACT_APP_MAILGUN_API_KEY || 'key-80f233779015381d73b3e67bf1b2b372',
  domain: process.env.REACT_APP_MAILGUN_DOMAIN || 'sandbox80efe094746a4db88c3cdaaf09e5cb8d.mailgun.org'
});
