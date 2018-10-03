import React, { Component } from 'react';
import { Container, List, Divider } from 'semantic-ui-react';
import AudioPlayer from 'react-modular-audio-player';
import './Mixes.css';

class Mixes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [
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
      ],
      player: false,
      current: {}
    };
 }

  componentDidMount() {
    // console.log(this.audio.duration);
  }

  selectTrack = track => this.setState({ current: track, player: true });

  render() {
    const { player, playlist, current } = this.state;
    return (
      <Container style={{position: 'relative', border: '1px solid black'}}>
        <List animated divided verticalAlign='middle'>
          {
            playlist.map((track, i) =>
              <List.Item
                key={i}
                header={track.title}
                description={track.artist}
                onClick={() => this.selectTrack(track)}
              />
            )
          }
        </List>
        <Divider />
        {player && <AudioPlayer autoPlay audioFiles={[current]} />}
      </Container>
    );
  }
}

export default Mixes;
