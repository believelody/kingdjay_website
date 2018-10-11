import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { aboutLoad } from '../../actions/aboutAction';
import { Container, Divider, Dimmer, Loader } from 'semantic-ui-react';
import Team from './Team';
import Tools from './Tools';

import './About.css'

class About extends Component {
  componentDidMount() {
    this.props.aboutLoad();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.about.about !== null && nextProps.about.about !== undefined && nextProps.about.about.background !== undefined) {
      console.log(nextProps.about.about);
      this.props.setBackgroundImage(nextProps.about.about.background.fields.file.url);

    }
  }

  render() {
    const { loading, about } = this.props.about;
    return (
      <Container style={{display: 'block', paddingTop: '10px', opacity: .8}}>
        {
          loading &&
          <Dimmer active>
            <Loader content='Chargement' />
          </Dimmer>
        }
        {
          !loading && about !== null && about !== undefined &&
          <Fragment>
            {
              about.team !== undefined && about.team !== null && about.team.length > 0 &&<Team team={about.team} />
            }
            <Divider />
            {
              about.tools !== undefined && about.tools !== null && about.tools.length > 0 && <Tools tools={about.tools} />
            }
          </Fragment>
        }
      </Container>
    );
  }
}

About.propTypes = {
  about: PropTypes.object.isRequired,
  aboutLoad: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  about: state.about
});

export default connect(mapStateToProps, { aboutLoad })(About);
