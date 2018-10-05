import React from 'react';
import { Button } from 'semantic-ui-react';

const Forward = ({handleNext}) => (
  <Button id='next' onClick={handleNext} icon='chevron right' />
);

export default Forward;
