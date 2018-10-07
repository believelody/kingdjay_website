import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import Backward from './Backward';
import Content from './Content';
import Duration from './Duration';
import Forward from './Forward';
import PlayPause from './PlayPause';
import ProgressBar from './ProgressBar';
import Stop from './Stop';
import ShuffleRepeat from './ShuffleRepeat';

import './AudioPlayer.css';

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loop: ''
    };
  }

  ShuffleRepeat = value => this.setState({ loop: value });

  render() {
    const { loop } = this.state;
    const { current, handleClick, playing, currentTime, duration } = this.props;
    return (
      <Segment className='player'>
        {currentTime > 0 && <ProgressBar handleSeek={handleClick} currentTime={currentTime} duration={duration} />}
        <Button.Group icon>
          <Backward handlePrev={handleClick} />
          <PlayPause playing={playing} handlePlayPause={handleClick} />
          <Stop handleStop={handleClick}p />
          <Forward handleNext={handleClick} />
          <ShuffleRepeat handleClick={this.ShuffleRepeat} value={loop} />
        </Button.Group>
        <Content artist={current.artist} title={current.title} />
        <Duration currentTime={currentTime} duration={duration} />
      </Segment>
    );
  }
}

export default AudioPlayer;
