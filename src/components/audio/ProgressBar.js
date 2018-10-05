import React from 'react';
import { Progress } from 'semantic-ui-react';

const ProgressBar = ({currentTime, duration}) => (
  <Progress attached='top' className='progress' success active size='small' percent={currentTime/duration * 100} />
);

export default ProgressBar;
