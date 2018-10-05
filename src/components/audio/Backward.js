import React from 'react';
import { Button } from 'semantic-ui-react';

const Backward = ({handlePrev}) => (
  <Button id='prev' onClick={handlePrev} icon='chevron left' />
);

export default Backward;
