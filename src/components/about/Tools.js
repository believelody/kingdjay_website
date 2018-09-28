import React, { Component } from 'react';
import { Grid, Segment, Item, Divider, Header } from 'semantic-ui-react';

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut metus nec tellus congue imperdiet non molestie diam. Donec posuere et ipsum vulputate consequat. Praesent egestas semper sollicitudin. Cras elit lacus, accumsan ut eros vitae, fringilla semper est. Quisque rutrum consequat lectus commodo accumsan. Nulla at interdum erat. Donec dapibus rutrum vestibulum. Proin sed urna at dolor scelerisque placerat.
In ultricies blandit pretium. Nullam tempor varius nisl, vel cursus odio tempor eget. Integer viverra rhoncus rhoncus. Aenean at ultrices metus. Donec vel eros ac quam sodales ultrices in nec erat. Vestibulum euismod quis arcu at congue. Vestibulum tristique tincidunt quam, in tincidunt nisl gravida eu. Donec mi est, sollicitudin sed risus sed, tempus tristique nisi. Suspendisse sed tellus a eros molestie gravida. Aenean vel elit non diam blandit fermentum eu eu nulla. Aliquam consectetur lacus eu lorem aliquet, sit amet aliquet tellus gravida. Duis pellentesque justo at dui euismod, quis viverra nunc interdum. Nam enim ex, aliquet eu urna in, fringilla porttitor ligula.`;

class Tools extends Component {

  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Header textAlign='center' size='huge'>Mon matériel</Header>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Item.Group>
              <Item>
                <Item.Image size='small' src='https://www.thomann.de/pics/bdb/420172/12362867_800.jpg' />
                <Item.Content>
                  <Item.Header as='h3'>Matos 1</Item.Header>
                  <Item.Description>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut metus nec tellus congue imperdiet non molestie diam. Donec posuere et ipsum vulputate consequat. Praesent egestas semper sollicitudin. Cras elit lacus, accumsan ut eros vitae, fringilla semper est. Quisque rutrum consequat lectus commodo accumsan. Nulla at interdum erat. Donec dapibus rutrum vestibulum. Proin sed urna at dolor scelerisque placerat.
                      In ultricies blandit pretium. Nullam tempor varius nisl, vel cursus odio tempor eget. Integer viverra rhoncus rhoncus. Aenean at ultrices metus. Donec vel eros ac quam sodales ultrices in nec erat. Vestibulum euismod quis arcu at congue. Vestibulum tristique tincidunt quam, in tincidunt nisl gravida eu. Donec mi est, sollicitudin sed risus sed, tempus tristique nisi. Suspendisse sed tellus a eros molestie gravida. Aenean vel elit non diam blandit fermentum eu eu nulla. Aliquam consectetur lacus eu lorem aliquet, sit amet aliquet tellus gravida. Duis pellentesque justo at dui euismod, quis viverra nunc interdum. Nam enim ex, aliquet eu urna in, fringilla porttitor ligula.
                    </p>
                  </Item.Description>
                </Item.Content>
              </Item>
              <Divider />
              <Item>
                <Item.Image size='small' src='https://i2.cdscdn.com/pdt2/2/4/1/1/300x300/ltc3700804173241/rw/pack-sono-complet-dj-player-night-2-strobes-le.jpg' />
                <Item.Content>
                  <Item.Header as='h3'>Matos 2</Item.Header>
                  <Item.Description content={description} />
                </Item.Content>
              </Item>
              <Divider />
              <Item>
                <Item.Image size='small' src='https://static.fnac-static.com/multimedia/Images/CD/CD/02/8E/9306829-1505-1540-1/tsp20180914225801/Enceinte-Autonome-Dj-Karaoke-Batterie-200W-2x3-USB-SD-BT-2-Micros-Telecommande-MyDJ-NOMAD200.jpg' />
                <Item.Content header='Matos 3' description={description} />
              </Item>
            </Item.Group>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    );
  }

}

export default Tools;
