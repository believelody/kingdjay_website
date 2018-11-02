import React from 'react';
import { Header } from 'semantic-ui-react';

const Content = ({artist, title}) => (
  <Header size='medium' content={title} subheader={artist} />
);

export default Content;
