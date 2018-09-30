import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import Team from './Team';
import Tools from './Tools';

import './About.css'

class About extends Component {
  componentDidMount() {
    this.props.setBackgroundImage('https://octenbulle.com/wp-content/uploads/2017/05/octenbulle-animations-image-dj.jpg');
  }

  render() {
    return (
      <Container style={{display: 'block', paddingTop: '10px', opacity: .8}}>
        <Team />
        <Divider />
        <Tools />
      </Container>
    );
  }

}

export default About;
