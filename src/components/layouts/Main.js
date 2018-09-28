import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Home, About, Contact, Mixes, MixItem, Events, EventItem } from '../Export';

const MainStyle = styled.main`
  position: relative;
  padding: 70px 0;
  top: 0;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 255, 0.6), rgba(255, 255, 0, 0.6)), url(${props => props.background});
  background-attachment: fixed;
  background-size: cover;
`;

class Main extends React.Component {
  render() {
    return (
      <MainStyle background='http://www.desktop-screens.com/data/out/33/2773551-dj-wallpapers.jpg'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/mix' component={Mixes} />
          <Route exact path='/event' component={Events} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </MainStyle>
    )
  }
}

export default Main;
