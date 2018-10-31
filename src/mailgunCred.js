import mailgun from 'mailgun.js';

export default mailgun.client({username: 'api', key: process.env.REACT_APP_MAILGUN_API_KEY || 'your mailgun api key here'});
