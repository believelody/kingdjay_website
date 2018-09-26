import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { Main, Header, Footer } from './components/Export';

import './App.css';

class App extends Component {
  render() {
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
            <Header />
            <Main />
            <Footer />
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
