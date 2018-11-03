import * as contentful from 'contentful';

export default contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || 'enter your contentful space id here',
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || 'enter your contentful access token here'
});
