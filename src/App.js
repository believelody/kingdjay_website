import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { Desktop, Mobile, AudioPlayer } from './components/Export';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

class App extends Component {
  state = {visible: false};


  handleButtonClick = visible => this.setState({ visible });

  render() {
    const { visible } = this.state;
    const { player } = this.props.player;
    return (
      <BrowserRouter>
        <Fragment>
          <Helmet
            title="KingDjay"
            meta={[
              { name: 'description', content: 'My personal Website' },
              { name: 'keywords', content: 'resume, blog, porfolio, anniversary, dj, wedding' },
            ]}
            script={[
              { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
            ]}
            link={[
              {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}
            ]}
          />
          { player && <AudioPlayer /> }
          <div className="app">
            {
              window.screen.width >= 1024 && <Desktop />
            }
            {
              window.screen.width < 1024 && <Mobile handleClick={this.handleButtonClick} visible={visible} />
            }
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  player: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  player: state.player
});

export default connect(mapStateToProps, {})(App);
