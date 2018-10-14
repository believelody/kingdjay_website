import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, List, Divider, Segment, Label, Dimmer, Loader } from 'semantic-ui-react';
import { mixLoad } from '../../actions/mixAction';
import { selectTrack, playlistLoad } from '../../actions/playerAction';
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
      player: false
    };
 }

 componentDidMount() {
   this.props.mixLoad();
 }

  selectTrackNumber = (trackId) => {
    if (this.props.player.playlist.length === 0) {
      this.props.playlistLoad(this.props.mix.mix.tracks);
    }
    this.props.selectTrack(trackId);
  }

  changeIndex = index => this.setState({currentTrackIndex: index});

  render() {
    // const { player, currentTrackIndex } = this.state;
    const { loading, mix } = this.props.mix;
    const { currentTrackIndex } = this.props.player;
    return (
      <Container style={{position: 'relative'}}>
        {
          loading &&
          <Dimmer active>
            <Loader content="Chargement" />
          </Dimmer>
        }
        {
          !loading && mix !== null && mix !== undefined &&
          <Segment>
            <List animated divided verticalAlign='middle'>
              {
                mix.tracks.map((track, i) =>
                  <List.Item
                    key={i}
                    className='item'
                    onClick={() => this.selectTrackNumber(i)}
                  >
                    <List.Content>
                      <List.Header>
                        {track.fields.title}
                      </List.Header>
                      <List.Description>
                        {track.fields.description}
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
        }

        <Divider />
      </Container>
    );
  }
}

Mixes.propTypes = {
  mix: PropTypes.object.isRequired,
  mixLoad: PropTypes.func.isRequired,
  selectTrack: PropTypes.func.isRequired,
  playlistLoad: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  mix: state.mix,
  player: state.player
});

export default connect(mapStateToProps, { mixLoad, selectTrack, playlistLoad })(Mixes);
