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
      loop: 0,
      playing: false,
      paused: false,
      currentTime: 0,
      duration: 0
    };
  }

  componentDidMount() {
    this.setState({playing: true, paused: false, currentTime: 0}, this.playAudio);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== -1) {
      this.setState({playing: true, paused: false, currentTime: 0}, this.playAudio);
    }
  }

  timer = () => this.setState({currentTime: this.audioElement.currentTime});

  ShuffleRepeat = () => {
    this.state.loop >= 3 ? this.setState({ loop: 0 }) : this.setState((state, props) => ({ loop: ++state.loop }));
  }

  setShuffleRepeat = () => {
    let value = this.state.loop;
    let currentTrackIndex = this.props.currentTrackIndex;
    switch (value) {
      case 1:
        this.props.changeIndex(Math.floor(Math.random() * this.props.length));
        this.playAudio();
        break;
      case 2:
        if (this.props.currentTrackIndex === this.props.length - 1) {
          this.props.changeIndex(0);
        }
        else {
          this.props.changeIndex(++currentTrackIndex);
        }
        this.playAudio();
        break;
      case 3:
        this.playAudio();
        break;
      default:
        break;
    }
  }

  loadDuration = () => {
    // console.log(this.audioElement.duration);
    this.setState({duration: this.audioElement.duration});
  }

  playAudio = () => {
    // console.log(this.props.current);
    if (this.props.current !== undefined) {
      if (this.state.currentTime > 0) {
        this.audioElement.currentTime = this.state.currentTime;
      }
      else {
        this.audioElement.load();
      }

      this.audioElement.play();
    }
  }

  pauseAudio = () => {
    // clearInterval(this.state.interval);
    this.setState({ currentTime: this.audioElement.currentTime });
    this.audioElement.pause();
  }

  stopAudio = () => {
    // clearInterval(this.state.interval);
    this.audioElement.currentTime = 0;
    this.audioElement.pause();
  }

  handleSeek = value => {
    // console.log(value);
    this.audioElement.currentTime = value;
  }

  handleClick = (e, {id}, value = 0) => {
    switch (id) {
      case 'play':
        this.setState({playing:true, paused: false}, this.playAudio);
        break;
      case 'pause':
        this.setState({playing: false, paused: true}, this.pauseAudio);
        break;
      case 'stop':
        this.setState({playing: false, paused: false, currentTime: 0}, this.stopAudio);
        break;
      case "prev":
        this.setState((state, props) => {
          let currentIndex = props.currentTrackIndex - 1;
          if (state.loop === 1) {
            currentIndex = Math.floor(Math.random() * props.length);
          }
          if (currentIndex < 0) {
            return {currentTime : 0};
          } else {
            this.props.changeIndex(currentIndex);
            return { playing:true, paused: false, currentTime: 0 };
          }
        },this.playAudio);
        break;
      case "next":
        this.setState((state, props) => {
          let currentIndex = props.currentTrackIndex + 1;
          if (state.loop === 1) {
            currentIndex = Math.floor(Math.random() * props.length);
          }
          if (currentIndex > this.props.length - 1) {
            if (this.state.loop === 2) {
              this.props.changeIndex(0);
              return {playing:true, paused: false, currentTime : 0};
            }
            else {
              return {currentTime : 0};
            }
          } else {
            this.props.changeIndex(currentIndex);
            return { playing:true, paused: false, currentTime: 0 };
          }
        },this.playAudio);
        break;
      default:
        break;
    }
  }

  render() {
    const { loop, currentTime, duration, playing, paused } = this.state;
    const { current } = this.props;
    return (
      <Segment className='player'>
        <ProgressBar
          handleSeek={this.handleSeek}
          currentTime={currentTime}
          duration={duration}
        />
        <Button.Group icon>
          <Backward handlePrev={this.handleClick} />
          <PlayPause playing={playing} handlePlayPause={this.handleClick} />
          <Stop handleStop={this.handleClick}p />
          <Forward handleNext={this.handleClick} />
          <ShuffleRepeat handleClick={this.ShuffleRepeat} value={loop} />
        </Button.Group>
        <Content artist={current ? current.artist : ''} title={current ? current.title : ''} />
        <Duration currentTime={currentTime} duration={duration} />
        {
          current &&
          <audio
            ref={audio => {this.audioElement = audio}}
            src={current.src}
            onLoadedMetadata={this.loadDuration}
            onTimeUpdate={this.timer}
            onEnded={() =>{
              setTimeout(this.setShuffleRepeat, 2000)
            }}
          />
        }
      </Segment>
    );
  }
}

export default AudioPlayer;
