import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Home, About, Contact, Mixes, MixItem, Events, EventItem } from '../Export';

const MainStyle = styled.main`
  position: relative;
  padding: 70px 0;
  top: 0;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, rgba(0, 0, 255, 0.6), rgba(255, 255, 0, 0.6)), url(${props => props.background});
  background-attachment: fixed;
  background-size: cover;
`;

class Main extends React.Component {
  state = {
    image: ''
  };

  setBackgroundImage = image => this.setState({image});

  render() {
    const { image } = this.state;
    return (
      <MainStyle background={image}>
        <Switch>
          <Route exact path='/' render={() => <Home setBackgroundImage={this.setBackgroundImage} />} />
          <Route exact path='/about' render={() => <About setBackgroundImage={this.setBackgroundImage} />} />
          <Route exact path='/mix' render={() => <Mixes setBackgroundImage={this.setBackgroundImage} />} />
          <Route exact path='/event' render={() => <Events setBackgroundImage={this.setBackgroundImage} />} />
          <Route exact path='/contact' render={() => <Contact setBackgroundImage={this.setBackgroundImage} />} />
        </Switch>
      </MainStyle>
    )
  }
}

export default Main;
