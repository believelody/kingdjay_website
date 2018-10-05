import React, { Component, Fragment } from 'react';
import { Container, List, Divider } from 'semantic-ui-react';
import {AudioPlayer} from '../Export';
import './Mixes.css';

const playlist = [
  {
    src: "tracks/Burna Boy - Follow Me.mp3",
    title: "Follow Me",
    artist: "Burna Boy"
  },
  {
    src: "tracks/Falz-_-Soft Work.mp3",
    title: "Soft Work",
    artist: "Falz"
  }
];

class Mixes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: false,
      currentTrackIndex: -1,
      playing: false,
      paused: false,
      currentTime: 0,
      duration: 0
    };
 }

  componentDidMount() {
    // console.log(this.audio.duration);
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.currentTrackIndex !== -1 && playlist[this.state.currentTrackIndex].src !== undefined) {
    //   this.audioElement.load();
    // }
  }

  selectTrackNumber = (trackId) => {
    this.setState({currentTrackIndex:trackId, playing:true, player: true}, this.playAudio);
  }

  playAudio = () => {
    // console.log(this.audioElement.currentTime);
    if (this.state.currentTime > 0) {
      this.audioElement.currentTime = this.state.currentTime;
    }
    else {
      this.audioElement.load();
    }
    console.log(this.audioElement.duration);
    this.audioElement.play();
  }

  pauseAudio = () => {
    this.setState({ currentTime: this.audioElement.currentTime });
    this.audioElement.pause();
  }

  stopAudio = () => {
    this.audioElement.currentTime = 0;
    this.audioElement.pause();
  }

  handleClick = (e, {id}) => {
    switch (id) {
      case 'play':
        this.setState({currentTrackIndex: this.state.currentTrackIndex, playing:true, paused: false, player: true}, this.playAudio);
        break;
      case 'pause':
        this.setState({playing: false, paused: true}, this.pauseAudio);
        break;
      case 'stop':
        this.setState({playing: false, paused: false, currentTime: 0}, this.stopAudio);
        break;
      case "prev":
        this.setState((state, props) => {
          let currentIndex = state.currentTrackIndex - 1;
          if (currentIndex < 0) {
            return null;
          } else {
            return { playing:true, paused: false, currentTrackIndex: currentIndex, player: true, currentTime: 0 };
          }
        },this.playAudio);
        break;
      case "next":
        this.setState((state, props) => {
          let currentIndex = state.currentTrackIndex + 1;
          if (currentIndex > playlist.length - 1) {
            return null;
          } else {
            return { playing:true, paused: false, currentTrackIndex: currentIndex, player: true, currentTime: 0 };
          }
        },this.playAudio);
        break;
      default:
        break;
    }
  }

  render() {
    const { player, currentTrackIndex, playing, currentTime, duration } = this.state;

    return (
      <Container style={{position: 'relative'}}>
        <List animated divided verticalAlign='middle'>
          {
            playlist.map((track, i) =>
              <List.Item
                key={i}
                header={track.title}
                description={track.artist}
                onClick={() => this.selectTrackNumber(i)}
              />
            )
          }
        </List>
        <Divider />
        {
          player &&
          <Fragment>
            <AudioPlayer
              currentTime={currentTime}
              duration={duration}
              playing={playing}
              handleClick={this.handleClick}
              current={playlist[currentTrackIndex]}
            />
            <audio ref={audio => {this.audioElement = audio}} src={playlist[currentTrackIndex].src} />
          </Fragment>
        }
      </Container>
    );
  }
}

export default Mixes;
