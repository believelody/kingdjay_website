import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sidebar, Menu, Segment } from 'semantic-ui-react';

const SideNav = ({visible, handleClick, children}) => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      onHide={() => handleClick(false)}
      vertical
      visible={visible}
      width='thin'
    >
      <Menu.Item as={NavLink} onClick={() => handleClick(false)} exact to='/'>
        Accueil
      </Menu.Item>
      <Menu.Item as={NavLink} onClick={() => handleClick(false)} exact to='/about'>
        A propos de moi
      </Menu.Item>
      <Menu.Item as={NavLink} onClick={() => handleClick(false)} exact to='/mix'>
        Mes mixes
      </Menu.Item>
      <Menu.Item as={NavLink} onClick={() => handleClick(false)} exact to='/event'>
        Evenements
      </Menu.Item>
      <Menu.Item as={NavLink} onClick={() => handleClick(false)} exact to='/contact'>
        Contact
      </Menu.Item>
    </Sidebar>
    {children}
  </Sidebar.Pushable>
);

export default SideNav;
