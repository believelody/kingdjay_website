import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Team from './Team';
import Tools from './Tools';

import './About.css'

class About extends Component {

  render() {
    return (
      <Container style={{display: 'block', paddingTop: '10px'}}>
        <Team />
        <Divider />
        <Tools />
      </Container>
    );
  }

}

export default About;
