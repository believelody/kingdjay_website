import React, { Component } from 'react';
import { Sidebar } from 'semantic-ui-react';
import { Main, Footer, SideNav, HeaderMobile } from '../Export';

const Mobile = ({visible, handleClick}) => (
  <SideNav visible={visible} handleClick={handleClick}>
    <Sidebar.Pusher dimmed={visible}>
      <HeaderMobile handleClick={handleClick} />
      <Main />
      <Footer />
    </Sidebar.Pusher>
  </SideNav>
);

export default Mobile;
