import React from 'react';
import { Label } from 'semantic-ui-react';

const Duration = ({currentTime, duration}) => (
  <Label>{currentTime} / {duration}</Label>
);

export default Duration;
