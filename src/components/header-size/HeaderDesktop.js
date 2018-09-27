import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

const HeaderDesktop = ({}) =>
<header className='header'>
  <Menu style={{background: 'transparent', height: '100%', fontSize: '1.2em'}} secondary inverted>
    <Menu.Item header>I am KingDjay</Menu.Item>
    <Menu.Menu position='right' style={{border: '3px solid blue'}}>
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
</header>

export default HeaderDesktop;
