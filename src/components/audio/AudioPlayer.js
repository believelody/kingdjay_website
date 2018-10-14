import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectTrack, playlistLoad } from '../../actions/playerAction';
import { Segment, Grid, Divider, Dimmer, Loader } from 'semantic-ui-react';
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
    if (nextProps.currentTrackIndex !== -1) {
      this.setState({playing: true, paused: false, currentTime: 0}, this.playAudio);
    }
  }

  timer = () => this.setState({currentTime: this.audioElement.currentTime});

  shuffleRepeat = value => {
    this.state.loop >= 3 ? this.setState({ loop: 0 }) : this.setState((state, props) => ({ loop: ++state.loop }));
  };

  setShuffleRepeat = () => {
    let value = this.state.loop;
    let currentTrackIndex = this.props.player.currentTrackIndex;
    switch (value) {
      case 1:
        this.props.selectTrack(Math.floor(Math.random() * this.props.playerplaylist.length));
        this.playAudio();
        break;
      case 2:
        if (currentTrackIndex === this.props.playerplaylist.length - 1) {
          this.props.selectTrack(0);
        }
        else {
          this.props.selectTrack(++currentTrackIndex);
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
    this.setState({duration: this.audioElement.duration});
  }

  playAudio = () => {
    if (this.props.player.playlist.length > 0 && this.props.player.playlist[this.props.player.currentTrackIndex] !== null && this.props.player.playlist[this.props.player.currentTrackIndex] !== undefined) {
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
    this.audioElement.currentTime = value / 100 * this.audioElement.duration;
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
          let currentIndex = props.player.currentTrackIndex - 1;
          if (state.loop === 1) {
            currentIndex = Math.floor(Math.random() * props.player.playlist.length);
          }
          if (currentIndex < 0) {
            return {currentTime : 0};
          } else {
            this.props.selectTrack(currentIndex);
            return { playing:true, paused: false, currentTime: 0 };
          }
        },this.playAudio);
        break;
      case "next":
        this.setState((state, props) => {
          let currentIndex = props.player.currentTrackIndex + 1;
          if (state.loop === 1) {
            currentIndex = Math.floor(Math.random() * props.player.playlist.length);
          }
          if (currentIndex > props.player.playlist.length - 1) {
            if (this.state.loop === 2 || this.state.loop === 3) {
              this.props.selectTrack(0);
              return {playing:true, paused: false, currentTime : 0};
            }
            else {
              return {currentTime : 0};
            }
          } else {
            this.props.selectTrack(currentIndex);
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
    const { loading, player, currentTrackIndex, playlist } = this.props.player;
    return (
      <Fragment>
        {
          loading &&
          <Dimmer active>
            <Loader content='Chargement' />
          </Dimmer>
        }
        {
          !loading && playlist.length > 0 &&
          <Segment className='player'>
            <Grid padded='horizontally'>
              <Grid.Row className='row'>
                <Grid.Column computer={14} tablet={14} mobile={12}>
                  <ProgressBar
                    handleSeek={this.handleSeek}
                    value={Math.ceil((currentTime/duration) * 100)}
                  />
                </Grid.Column>
                <Grid.Column textAlign='center' computer={2} tablet={2} mobile={4}>
                  <Duration currentTime={currentTime} duration={duration} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className='row' textAlign='center'>
                <Grid.Column>
                  <Backward handlePrev={this.handleClick} />
                  <ShuffleRepeat handleClick={this.shuffleRepeat} value={loop} />
                  <PlayPause playing={playing} handlePlayPause={this.handleClick} />
                  <Stop handleStop={this.handleClick}p />
                  <Forward handleNext={this.handleClick} />
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row className='row' textAlign='center'>
                <Grid.Column>
                  <Content
                    artist={(playlist[currentTrackIndex] !== undefined && playlist[currentTrackIndex].fields.description) ? playlist[currentTrackIndex].fields.description : ''} title={(playlist[currentTrackIndex] !== undefined && playlist[currentTrackIndex].fields.title) ? playlist[currentTrackIndex].fields.title : ''}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {
              currentTrackIndex !== -1 && playlist[currentTrackIndex] !== undefined &&
              <audio
                ref={audio => {this.audioElement = audio}}
                src={playlist[currentTrackIndex].fields.file.url}
                onLoadedMetadata={this.loadDuration}
                onTimeUpdate={this.timer}
                onEnded={() =>{
                  setTimeout(this.setShuffleRepeat, 2000)
                }}
              />
            }
          </Segment>
        }
      </Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  player: PropTypes.object.isRequired,
  selectTrack: PropTypes.func.isRequired,
  playlistLoad: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps, { selectTrack, playlistLoad })(AudioPlayer);
