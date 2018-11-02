import React from 'react';
import { Button } from 'semantic-ui-react';

const Forward = ({handleNext}) => (
  <Button id='next' inverted color='green' circular onClick={handleNext} icon='forward' />
);

export default Forward;
