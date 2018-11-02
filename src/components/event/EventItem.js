import React, { Component, Fragment } from 'react';
import 'moment/locale/fr';
import moment from 'moment';
import Moment from 'react-moment';
import { Container, Segment, Divider, Header, Grid, Button, Icon, Card, Dimmer, Loader } from 'semantic-ui-react';

class EventItem extends Component {

  toCapitalCaseFilter = d => d.replace(d.slice(0, 1), d.slice(0, 1).toUpperCase());

  render() {
    const { event } = this.props;
    return (
      <Segment>
        <Grid celled>
          <Grid.Row>
            {
              window.screen.width >= 750 &&
              <Grid.Column width={4} className='event-date'>
                {
                  event.fields.event !== null && event.fields.event !== undefined &&
                  <img
                    src={event.fields.event.fields.file.url}
                    className='event-date-background'
                    alt='event'
                  />
                }
                <Header textAlign='center' size='huge'>
                  <Moment locale='fr' format='DD' add={{days: 1}} date={event.fields.date} />
                </Header>
                <Header textAlign='center' size='medium'>
                  <Moment locale='fr' filter={this.toCapitalCaseFilter} format='MMM YYYY' date={event.fields.date} />
                </Header>
              </Grid.Column>
            }
            <Grid.Column width={window.screen.width < 750 ? 16 : 12}>
              {
                window.screen.width < 750 &&
                <Card className='event-date' centered>
                  {
                    event.fields.event !== null && event.fields.event !== undefined &&
                    <img src={event.fields.event.fields.file.url} className='event-date-background' alt='event'
                    />
                  }
                  <Card.Content>
                    <Card.Header textAlign='center'>
                      <Moment locale='fr' format='DD' add={{days: 1}} date={event.fields.date} />
                    </Card.Header>
                    <Card.Description textAlign='center'>
                      <Moment locale='fr' filter={this.toCapitalCaseFilter} format='MMMM YYYY' date={event.fields.date} />
                    </Card.Description>
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
                     {event.fields.title}
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
                    {event.fields.title}
                    <Divider />
                  </Fragment>
                }
              </Header>
              <Header size='small'>
                <div className={window.screen.width >= 750 ? 'ui container' : undefined}>
                  {event.fields.description}
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
    );
  }
}

export default EventItem;
