import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { eventLoad } from '../../actions/eventAction';
import EventItem from './EventItem';

import { Container, Segment, Header, Dimmer, Loader } from 'semantic-ui-react';
import './Event.css';

class Events extends Component {
  componentDidMount() {
    this.props.eventLoad();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.event.event !== null && nextProps.event.event !== undefined && nextProps.event.event.background !== undefined) {
      // console.log(nextProps.event.event);
      this.props.setBackgroundImage(nextProps.event.event.background.fields.file.url);

    }
  }

  render() {
    const { loading, event } = this.props.event;
    return (
      <Container fluid={window.screen.width < 700 ? true : false}>
        {
          loading &&
          <Dimmer active>
            <Loader content='Chargement' />
          </Dimmer>
        }
        {
          !loading && event !== null && event !== undefined &&
          <Fragment>
            <Header textAlign='center'>Event</Header>
            {
              event.events !== null && event.events !== undefined && event.events.length > 0 && event.events.map((event, i) =>
                <EventItem key={i} event={event} />
              )
            }
          </Fragment>
        }
      </Container>
    );
  }
}

Events.propTypes = {
  event: PropTypes.object.isRequired,
  eventLoad: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(mapStateToProps, { eventLoad })(Events);
