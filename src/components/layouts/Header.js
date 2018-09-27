import React, { Fragment } from 'react';
import { HeaderDesktop, HeaderMobile } from '../Export';

import './Layout.css'

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

const Header = ({handleClick}) => (
  <header style={headerStyle}>
    {
      window.screen.width >= 1024 && <HeaderDesktop />
    }
    {
      window.screen.width < 1024 && <HeaderMobile handleClick={handleClick} />
    }
  </header>
);

export default Header;
