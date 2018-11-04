import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectTrack } from '../../actions/playerAction';
import { Menu, Header, Label } from 'semantic-ui-react';

class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.currentTrackIndex
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentTrackIndex) {

    }
  }

  handleClick = id => {
    this.props.selectTrack(id);
    this.setState({ activeItem: id });
  }

  render() {
    const { activeItem } = this.state;
    const {showMenu, playlist, currentTrackIndex} = this.props;
    return (
      <Fragment>
        {
          showMenu &&
          <Menu vertical fluid>
            {
              playlist.map((track, i) =>
                <Menu.Item
                  key={i}
                  onClick={() => this.handleClick(i)}
                  active={activeItem === i}
                >
                  <b>{track.fields.title}</b> - {track.fields.description}
                  {
                    activeItem === i && <Label style={{float: 'right', marginRight: 20}} color='violet' circular>playing...</Label>
                  }
                </Menu.Item>
              )
            }
          </Menu>
        }
      </Fragment>
    );
  }
}

TrackList.propTypes = {
  selectTrack: PropTypes.func.isRequired
};

export default connect(null, { selectTrack })(TrackList);
