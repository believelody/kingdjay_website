import React, { Component, Fragment } from 'react';
import { Container, Segment, Divider, Header, Grid, Button, Icon, Card } from 'semantic-ui-react';

import './Event.css';

class Events extends Component {

  render() {
    return (
      <Container fluid={window.screen.width < 700 ? true : false}>
        <Header textAlign='center'>Event</Header>
        <Segment>
          <Grid celled>
            <Grid.Row>
              {
                window.screen.width >= 750 &&
                <Grid.Column width={4} className='event-date'>
                  <img src='http://durevie.paris/wp-content/uploads/sites/7/2017/10/time-warp.jpg' className='event-date-background' alt='event' />
                  <Header textAlign='center' size='huge'>14</Header>
                  <Header textAlign='center' size='medium'>Janv 2020</Header>
                </Grid.Column>
              }
              <Grid.Column width={window.screen.width < 750 ? 16 : 12}>
                {
                  window.screen.width < 750 &&
                  <Card className='event-date' centered>
                    <img src='http://durevie.paris/wp-content/uploads/sites/7/2017/10/time-warp.jpg' className='event-date-background' alt='event' />
                    <Card.Content>
                      <Card.Header textAlign='center'>14</Card.Header>
                      <Card.Description textAlign='center'>Janv 2020</Card.Description>
                    </Card.Content>
                  </Card>
                }
                <Header textAlign='center' size={window.screen.width < 750 ? 'medium' : 'large'}>
                  {
                    window.screen.width >= 750 &&
                    <Divider horizontal>
                      <span>
                        <Icon name='star outline' size='tiny' />
                        <Icon name='star outline' size='small' />
                        <Icon name='star outline' />
                      </span>
                       KingDjayk au Zénith de Paris
                      <span>
                        <Icon name='star outline' />
                        <Icon name='star outline' size='small' />
                        <Icon name='star outline' size='tiny' />
                      </span>
                    </Divider>
                  }
                  {
                    window.screen.width < 750 &&
                    <Fragment>
                      KingDjayk au Zénith de Paris
                      <Divider />
                    </Fragment>
                  }
                </Header>
                <Header size='small'>
                  <div className={window.screen.width >= 750 ? 'ui container' : undefined}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut metus nec tellus congue imperdiet non molestie diam. Donec posuere et ipsum vulputate consequat. Praesent egestas semper sollicitudin. Cras elit lacus, accumsan ut eros vitae, fringilla semper est. Quisque rutrum consequat lectus commodo accumsan. Nulla at interdum erat. Donec dapibus rutrum vestibulum. Proin sed urna at dolor scelerisque placerat.
                  </div>
                </Header>
                <Button primary floated='right'>
                  Achetez le billet
                  <Icon name="right chevron" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Grid celled>
            <Grid.Row>
              {
                window.screen.width >= 750 &&
                <Grid.Column width={4}>
                  <Header textAlign='center' size='huge'>25</Header>
                  <Header textAlign='center' size='medium'>Juin 2020</Header>
                </Grid.Column>
              }
              <Grid.Column width={window.screen.width < 750 ? 16 : 12}>
                {
                  window.screen.width < 750 &&
                  <Card centered>
                    <Card.Content>
                      <Card.Header textAlign='center'>25</Card.Header>
                      <Card.Description textAlign='center'>Juin 2020</Card.Description>
                    </Card.Content>
                  </Card>
                }
                <Header textAlign='center' size={window.screen.width < 750 ? 'medium' : 'large'}>
                  {
                    window.screen.width >= 750 &&
                    <Divider horizontal>
                      <span>
                        <Icon name='star outline' size='tiny' />
                        <Icon name='star outline' size='small' />
                        <Icon name='star outline' />
                      </span>
                      Babi By Night avec KingDjayk en Guest Star
                      <span>
                        <Icon name='star outline' />
                        <Icon name='star outline' size='small' />
                        <Icon name='star outline' size='tiny' />
                      </span>
                    </Divider>
                  }
                  {
                    window.screen.width < 750 &&
                    <Fragment>
                      Babi By Night avec KingDjayk en Guest Star
                      <Divider />
                    </Fragment>
                  }
                </Header>
                <Header size='small'>
                  <div className={window.screen.width >= 750 ? 'ui container' : undefined}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut metus nec tellus congue imperdiet non molestie diam. Donec posuere et ipsum vulputate consequat. Praesent egestas semper sollicitudin. Cras elit lacus, accumsan ut eros vitae, fringilla semper est. Quisque rutrum consequat lectus commodo accumsan. Nulla at interdum erat. Donec dapibus rutrum vestibulum. Proin sed urna at dolor scelerisque placerat.
                    In ultricies blandit pretium. Nullam tempor varius nisl, vel cursus odio tempor eget. Integer viverra rhoncus rhoncus. Aenean at ultrices metus. Donec vel eros ac quam sodales ultrices in nec erat. Vestibulum euismod quis arcu at congue. Vestibulum tristique tincidunt quam, in tincidunt nisl gravida eu. Donec mi est, sollicitudin sed risus sed, tempus tristique nisi. Suspendisse sed tellus a eros molestie gravida. Aenean vel elit non diam blandit fermentum eu eu nulla. Aliquam consectetur lacus eu lorem aliquet, sit amet aliquet tellus gravida. Duis pellentesque justo at dui euismod, quis viverra nunc interdum. Nam enim ex, aliquet eu urna in, fringilla porttitor ligula.
                  </div>
                </Header>
                <Button primary floated='right'>
                  Achetez le billet
                  <Icon name="right chevron" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }

}

export default Events;
