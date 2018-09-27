import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Contact, Mixes, MixItem, Events, EventItem } from '../Export';

const mainStyle = {
  position: 'relative',
  padding: '70px 0',
  top: 0,
  minHeight: '100vh',
  backgroundImage: "linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)), url('http://www.desktop-screens.com/data/out/33/2773277-dj-wallpapers.jpg')",
  backgroundSize: 'cover'
}

const Main = () => (
  <main style={mainStyle}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/mix' component={Mixes} />
      <Route exact path='/event' component={Events} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
  </main>
);

export default Main;
