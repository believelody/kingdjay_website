import * as contentful from 'contentful';
import config from '../config/contentful';

export default contentful.createClient({
  space: config.CONTENTFUL_SPACE_ID,
  accessToken: config.CONTENTFUL_ACCESS_TOKEN
});
