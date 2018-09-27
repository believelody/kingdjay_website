import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { HeaderDesktop, HeaderMobile, Desktop, Mobile } from './components/Export';

import './App.css';

const headerStyle = {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '70px',
  zIndex: 1,
  padding: '0 20px',
  background: 'rgba(0, 0, 0, .4)',
  borderRadius: '4px'
}

class App extends Component {
  state = {visible: false};


  handleButtonClick = visible => this.setState({ visible });

  render() {
    const { visible } = this.state;
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

export default App;
