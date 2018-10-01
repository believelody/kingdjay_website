import React, { Component } from 'react';
import { Container, Image, Segment, Item, Header } from 'semantic-ui-react';
import { Carousel } from 'react-responsive-carousel';
import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.setBackgroundImage('https://www.studio-m.fr/sites/default/files/2017-12/formation-dj_0.jpg');
  }

  render() {
    return (
      <Container textAlign='center' fluid={window.screen.width < 750 ? true : false}>
        <Carousel
          className='carousel'
          infiniteLoop
          autoPlay
          showThumbs={false}
          showIndicators={false}
          swipeable={window.screen.width < 750 ? true : false}
          showArrows={window.screen.width >= 750 ? true : false}
        >
          <div>
            <Image src="https://faceafrique.com/wp-content/uploads/2017/11/dj_arafat_au_bataclan_en_decembre.jpg" />
          </div>
          <div>
            <Image src="http://www.boraclub.fr/rep/rep_article/2011-04-26_152336_Dj-Assad.jpg" />
          </div>
          <div>
            <Image src="http://static1.purepeople.com/articles/3/20/93/73/@/2804895-trey-smith-dj-ace-fils-aine-de-will-s-950x0-1.jpg" />
          </div>
        </Carousel>
        <Segment>
          <Header size='large' textAlign='center' content='Témoignanges' subheader='Ils nous ont fait confiance' />
        </Segment>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='small' src='https://assets.marthastewartweddings.com/styles/wmax-520-highdpi/d50/aubrey-austin-wedding-couple-19490015-6189640-1016/aubrey-austin-wedding-couple-19490015-6189640-1016_vert.jpg?itok=z1-nR_Rn' />
              <Item.Content>
                <Item.Header as='h3'>Adele & Thierry</Item.Header>
                <Item.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut metus nec tellus congue imperdiet non molestie diam. Donec posuere et ipsum vulputate consequat. Praesent egestas semper sollicitudin. Cras elit lacus, accumsan ut eros vitae, fringilla semper est. Quisque rutrum consequat lectus commodo accumsan. Nulla at interdum erat. Donec dapibus rutrum vestibulum. Proin sed urna at dolor scelerisque placerat.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>        
          <Item.Group>
            <Item>
              <Item.Image size='small' src='https://images.wisegeek.com/bride-and-groom.jpg' />
              <Item.Content>
                <Item.Header as='h3'>Samantha & Yves</Item.Header>
                <Item.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut metus nec tellus congue imperdiet non molestie diam. Donec posuere et ipsum vulputate consequat. Praesent egestas semper sollicitudin. Cras elit lacus, accumsan ut eros vitae, fringilla semper est. Quisque rutrum consequat lectus commodo accumsan. Nulla at interdum erat. Donec dapibus rutrum vestibulum. Proin sed urna at dolor scelerisque placerat.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Container>
    );
  }

}

export default Home;
