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
  },
  {
    src: "tracks/All Of Me Kizomba.mp3",
    title: "All Of Me Kizomba",
    artist: "J. Legend Cover"
  },
  {
    src: "tracks/Bisa-Kdei-Fire-ft-Efya.mp3",
    title: "Fire",
    artist: "Bisa Kdei ft Efya"
  },
  {
    src: "tracks/Hello - Adele (Slow Gospel African version) by Am-Bess.mp3",
    title: "Hello",
    artist: "Am-Bess Adele Cover"
  },
  {
    src: "tracks/Diamond Platnumz ft Rayvanny – Salome.mp3",
    title: "Salome",
    artist: "Diamond Platnumz ft Rayvanny"
  },
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
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.currentTrackIndex !== -1 && playlist[this.state.currentTrackIndex].src !== undefined) {
    //   this.audioElement.load();
    // }
  }

  timer = () => this.setState({currentTime: this.audioElement.currentTime});

  selectTrackNumber = (trackId) => {
    this.setState({currentTrackIndex:trackId, playing:true, player: true, currentTime: 0}, this.playAudio);
  }

  loadDuration = () => {
    // console.log(this.audioElement.duration);
    this.setState({duration: this.audioElement.duration});
  }

  playAudio = () => {
    // console.log(this.audioElement.currentTime);
    if (this.state.currentTime > 0) {
      this.audioElement.currentTime = this.state.currentTime;
    }
    else {
      this.audioElement.load();
    }

    this.audioElement.play();
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
            return { playing:true, paused: false, currentTrackIndex: currentIndex, currentTime: 0 };
          }
        },this.playAudio);
        break;
      case "next":
        this.setState((state, props) => {
          let currentIndex = state.currentTrackIndex + 1;
          if (currentIndex > playlist.length - 1) {
            return null;
          } else {
            return { playing:true, paused: false, currentTrackIndex: currentIndex, currentTime: 0 };
          }
        },this.playAudio);
        break;
      default:
        break;
    }
  }

  render() {
    const { player, currentTrackIndex, playing, currentTime, duration } = this.state;
    // console.log(this.state.currentTime);
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
              handleSeek={this.handleSeek}
              current={playlist[currentTrackIndex]}
            />
            <audio
              ref={audio => {this.audioElement = audio}}
              src={playlist[currentTrackIndex].src}
              onLoadedMetadata={this.loadDuration}
              onTimeUpdate={this.timer}
            />
          </Fragment>
        }
      </Container>
    );
  }
}

export default Mixes;
