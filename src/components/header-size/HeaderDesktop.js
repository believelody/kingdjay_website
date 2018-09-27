import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const HeaderDesktop = ({}) =>
  <Menu style={{background: 'transparent', height: '100%', fontSize: '1.2em'}} secondary inverted>
    <Menu.Item content='I am KingDjay' header/>

    <Menu.Menu position='right'>
      <Menu.Item as={NavLink} exact to='/'>
        <b>Accueil</b>
      </Menu.Item>
      <Menu.Item as={NavLink} exact to='/about'>
        <b>A propos de moi</b>
      </Menu.Item>
      <Menu.Item as={NavLink} exact to='/mix'>
        <b>Mes Mixes</b>
      </Menu.Item>
      <Menu.Item as={NavLink} exact to='/event'>
        <b>Evenements</b>
      </Menu.Item>
      <Menu.Item as={NavLink} exact to='/contact'>
        <b>Contact</b>
      </Menu.Item>
    </Menu.Menu>
  </Menu>

export default HeaderDesktop;
