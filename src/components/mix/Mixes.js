import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, List, Divider, Segment, Label, Dimmer, Loader } from 'semantic-ui-react';
import { mixLoad } from '../../actions/mixAction';
import { selectTrack, playlistLoad } from '../../actions/playerAction';
import {AudioPlayer} from '../Export';
import './Mixes.css';

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

 componentWillReceiveProps(nextProps) {
   if (nextProps.mix.mix !== null && nextProps.mix.mix !== undefined && nextProps.mix.mix.background !== undefined) {
     // console.log(nextProps.event.event);
     this.props.setBackgroundImage(nextProps.mix.mix.background.fields.file.url);

   }
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
