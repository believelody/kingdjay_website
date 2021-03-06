import React from 'react';
import { Button } from 'semantic-ui-react';

const Stop = ({handleStop}) => (
  <Button circular inverted color='green' id='stop' onClick={handleStop} icon='stop' />
);

export default Stop;
