import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Footer extends Component {

  render() {
    return (
      <footer>
        <Segment textAlign='center'>
          <span>&copy; 2018 Copyright</span>
        </Segment>
      </footer>
    );
  }

}

export default Footer;
