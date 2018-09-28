import React, { Component } from 'react';
import { Segment, Image, Header, Divider, Grid } from 'semantic-ui-react';

class Team extends Component {

  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Header textAlign='center' size='huge'>Mon équipe</Header>
          </Segment>
        </Grid.Column>
        <Grid.Column className='team-item'>
          <Segment style={{color: 'black'}}>
            {
              window.screen.width >= 1024 && <Image floated='left' src='http://www.phonographecorp.com/wp-content/uploads/2013/06/DJ-EZ_0.jpg' size='medium' rounded />
            }
            {
              window.screen.width < 1024 && <Image centered src='http://www.phonographecorp.com/wp-content/uploads/2013/06/DJ-EZ_0.jpg' size='medium' rounded />
            }
            <Divider horizontal>
              <Header size='large' textAlign='center'>KingDjay</Header>
            </Divider>
            <Header size='medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut metus nec tellus congue imperdiet non molestie diam. Donec posuere et ipsum vulputate consequat. Praesent egestas semper sollicitudin. Cras elit lacus, accumsan ut eros vitae, fringilla semper est. Quisque rutrum consequat lectus commodo accumsan. Nulla at interdum erat. Donec dapibus rutrum vestibulum. Proin sed urna at dolor scelerisque placerat.
              In ultricies blandit pretium. Nullam tempor varius nisl, vel cursus odio tempor eget. Integer viverra rhoncus rhoncus. Aenean at ultrices metus. Donec vel eros ac quam sodales ultrices in nec erat.
            </Header>
          </Segment>
        </Grid.Column>

        <Grid.Column className='team-item'>
          <Segment style={{color: 'black'}}>
            {
              window.screen.width >= 1024 && <Image src='https://2ch.hk/b/src/181576108/15346026364910.jpg' size='medium' rounded floated='right' />
            }
            {
              window.screen.width <1024 && <Image src='https://2ch.hk/b/src/181576108/15346026364910.jpg' size='medium' rounded centered />
            }
            <Divider horizontal>
              <Header size='large' textAlign='center'>DJ Pozay</Header>
            </Divider>
            <Header size='small'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut metus nec tellus congue imperdiet non molestie diam. Donec posuere et ipsum vulputate consequat. Praesent egestas semper sollicitudin. Cras elit lacus, accumsan ut eros vitae, fringilla semper est. Quisque rutrum consequat lectus commodo accumsan. Nulla at interdum erat. Donec dapibus rutrum vestibulum. Proin sed urna at dolor scelerisque placerat.
              In ultricies blandit pretium. Nullam tempor varius nisl, vel cursus odio tempor eget. Integer viverra rhoncus rhoncus. Aenean at ultrices metus. Donec vel eros ac quam sodales ultrices in nec erat. Vestibulum euismod quis arcu at congue. Vestibulum tristique tincidunt quam, in tincidunt nisl gravida eu. Donec mi est, sollicitudin sed risus sed, tempus tristique nisi. Suspendisse sed tellus a eros molestie gravida. Aenean vel elit non diam blandit fermentum eu eu nulla. Aliquam consectetur lacus eu lorem aliquet, sit amet aliquet tellus gravida. Duis pellentesque justo at dui euismod, quis viverra nunc interdum. Nam enim ex, aliquet eu urna in, fringilla porttitor ligula.
            </Header>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }

}

export default Team;
