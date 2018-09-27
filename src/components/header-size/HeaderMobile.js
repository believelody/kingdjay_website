import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const HeaderMobile = ({handleClick}) =>
<header className='header'>
  <Button onClick={() => handleClick(true)}>MENU</Button>
</header>

export default HeaderMobile;
