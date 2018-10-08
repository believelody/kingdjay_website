import React from 'react';
import { Button } from 'semantic-ui-react';

const Backward = ({handlePrev}) => (
  <Button id='prev' inverted color='green' circular onClick={handlePrev} icon='backward' />
);

export default Backward;
