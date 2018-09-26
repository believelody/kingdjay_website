import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class Header extends Component {

  render() {
    return (
      <header>
        <Menu right>
          <Menu.Item header>I am KingDjay</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item to='/' content='Accueil' link />
            <Menu.Item to='/about' content='A propos de moi' link />
            <Menu.Item to='/mix' content='Mes Mixs' link />
            <Menu.Item to='/event' content='Evenements' link />
            <Menu.Item to='/contact' content='Contact' link />
          </Menu.Menu>
        </Menu>
      </header>
    );
  }

}

export default Header;
