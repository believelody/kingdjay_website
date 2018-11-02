import React from 'react';
import { Button } from 'semantic-ui-react';

const PlayPause = ({playing, handlePlayPause}) => (
  <Button
    size='massive'
    id={!playing ? 'play' : 'pause'}
    onClick={handlePlayPause}
    circular
    inverted
    color='green'
    icon={playing ? 'pause' : 'play'}
  />
);

export default PlayPause;
