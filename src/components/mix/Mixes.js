import React, { Component, Fragment } from 'react';
import { Container, List, Divider, Segment, Label } from 'semantic-ui-react';
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
      currentTrackIndex: -1
    };
 }

  selectTrackNumber = (trackId) => {
    this.setState({currentTrackIndex:trackId, player: true});
  }

  changeIndex = index => this.setState({currentTrackIndex: index});

  render() {
    const { player, currentTrackIndex } = this.state;
    // console.log(currentTrackIndex);
    return (
      <Container style={{position: 'relative'}}>
        <Segment>
          <List animated divided verticalAlign='middle'>
            {
              playlist.map((track, i) =>
                <List.Item
                  key={i}
                  className='item'
                  onClick={() => this.selectTrackNumber(i)}
                >
                  <List.Content>
                    <List.Header>
                      {track.title}
                    </List.Header>
                    <List.Description>
                      {track.artist}
                      {
                        currentTrackIndex === i && <Label style={{float: 'right', marginRight: 20}} color='violet' circular>playing...</Label>
                      }
                    </List.Description>
                  </List.Content>
                </List.Item>
              )
            }
          </List>
        </Segment>
        <Divider />
        {
          player &&
          <AudioPlayer
            changeIndex={this.changeIndex}
            current={playlist[currentTrackIndex]}
            currentTrackIndex={currentTrackIndex}
            length={playlist.length}
            player={player}
          />
        }
      </Container>
    );
  }
}

export default Mixes;
