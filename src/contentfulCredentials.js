import * as contentful from 'contentful';

export default contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || '7fioyofac2ub',
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN || '43182c154f65e26fcef8b4afe2ed962a63ab8e3ac44e30585e453ccbf9a5b2cc'
});
