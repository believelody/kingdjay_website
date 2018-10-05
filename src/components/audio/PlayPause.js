import React from 'react';
import { Button } from 'semantic-ui-react';

const PlayPause = ({playing, handlePlayPause}) => (
  <Button id={!playing ? 'play' : 'pause'} onClick={handlePlayPause} circular icon={playing ? 'pause' : 'play'} />
);

export default PlayPause;
